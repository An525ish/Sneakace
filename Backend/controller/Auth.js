const { User } = require('../model/User');
const crypto = require('crypto');
const { sanitizeUser, sendMail } = require('../services/common');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
  try {
    const salt = crypto.randomBytes(16);
    crypto.pbkdf2(
      req.body.password,
      salt,
      310000,
      32,
      'sha256',
      async function (err, hashedPassword) {
        const user = new User({ ...req.body, password: hashedPassword, salt });

        // Generate and save refresh token
        const refreshToken = jwt.sign(
          sanitizeUser(user),
          process.env.JWT_REFRESH_SECRET_KEY,
          { expiresIn: '7d' }
        );
        user.refreshToken = refreshToken;

        const doc = await user.save();

        req.login(sanitizeUser(doc), (err) => {
          // this also calls serializer and adds to session
          if (err) {
            res.status(400).json(err);
          } else {
            const token = jwt.sign(
              sanitizeUser(doc),
              process.env.JWT_SECRET_KEY,
              { expiresIn: '1h' }
            );
            res
              .cookie('jwt', token, {
                expires: new Date(Date.now() + 3600000),
                httpOnly: true,
              })
              .cookie('refreshToken', refreshToken, {
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                httpOnly: true,
              })
              .status(201)
              .json({ id: doc.id, role: doc.role });
          }
        });
      }
    );
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  const user = req.user;

  // Generate and send new refresh token
  const refreshToken = jwt.sign(
    sanitizeUser(user),
    process.env.JWT_REFRESH_SECRET_KEY,
    { expiresIn: '7d' }
  );

  res
    .cookie('jwt', user.token, {
      expires: new Date(Date.now() + 3600000),
      httpOnly: true,
    })
    .cookie('refreshToken', refreshToken, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    })
    .status(201)
    .json({ id: user.id, role: user.role });
};


exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not found' });
  }
  
  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      throw new Error('Invalid refresh token');
    }

    // Generate and send a new access token
    const token = jwt.sign(sanitizeUser(user), process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    res
      .cookie('jwt', token, {
        expires: new Date(Date.now() + 3600000),
        httpOnly: true,
      })
      .status(200)
      .json({ id: user.id, role: user.role });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
};

exports.logout = async (req, res) => {
  res
    .cookie('jwt', null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .sendStatus(200);
};

exports.checkAuth = async (req, res) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
};
