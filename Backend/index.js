require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const cookieParser = require('cookie-parser');
const { User } = require('./model/User');
const { isAuth, sanitizeUser, cookieExtractor } = require('./services/common');
const path = require('path');
const connectDB = require('./database/db');
const cartRouter = require('./routes/Cart');
const productsRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const authRouter = require('./routes/AuthRoutes');
const ordersRouter = require('./routes/Order');
const usersRouter = require('./routes/Users');
const AddressRouter= require('./routes/Address');
const CLIENT_URL=process.env.CLIENT_URL

const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = process.env.JWT_SECRET_KEY;

connectDB();
const server = express();
server.get('/', (req, res) => {
  res.send('success');
});

//middlewares

// server.use(express.static(path.resolve(__dirname, 'build')));
server.use(
  session({
    secret: 'session-secret',
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
  })
);
server.use(passport.authenticate('session'));
server.use(
  cors({
    exposedHeaders: ['X-Total-Count'],
    credentials: true,
    origin: [CLIENT_URL],
  })
);
server.use(cookieParser());

server.use(express.json()); // to parse req.body
server.use('/auth', authRouter.router);
server.use('/products', isAuth(), productsRouter.router);
server.use('/users', usersRouter.router);
server.use('/cart', isAuth(), cartRouter.router);
server.use('/orders', isAuth(), ordersRouter.router);
server.use('/categories', isAuth(), categoriesRouter.router);
server.use('/user/address',isAuth(),AddressRouter.router);

// Passport Strategies
passport.use(
  'local',
  new LocalStrategy({ usernameField: 'email' }, async function (
    email,
    password,
    done
  ) {
    // by default passport uses username
    // console.log({ email, password });
    try {
      const user = await User.findOne({ email: email });
      console.log(user);
      if (!user) {
        return done(null, false, { message: 'invalid credentials' }); // for safety
      }
      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        'sha256',
        async function (err, hashedPassword) {
          if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
            return done(null, false, { message: 'invalid credentials' });
          }
          const token = jwt.sign(
            sanitizeUser(user),
            process.env.JWT_SECRET_KEY
          );
          done(null, { id: user.id, role: user.role, token }); // this lines sends to serializer
        }
      );
    } catch (err) {
      done(err);
    }
  })
);

// console.log(process.env.JWT_SECRET_KEY,"hello")

passport.use(
  'jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        ExtractJwt.fromExtractors([
          (req) => {
            let token = null;
            if (req && req.cookies) {
              token = req.cookies.jwt;
            }
            return token;
          },
        ]),
      ]),
      secretOrKey: process.env.JWT_SECRET_KEY,
    },
    async function (jwt_payload, done) {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, sanitizeUser(user));
        } else {
          return done(null, false);
        }
      } catch (err) {
        return done(err, false);
      }
    }
  )
);

// this creates session variable req.user on being called from callbacks
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, { id: user.id, role: user.role });
  });
});

// this changes session variable req.user when called from authorized request

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, { id: user.id, role: user.role, token: user.token });
  });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`server is listening on ${PORT}`));
