const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  return token;
};

exports.sendMail = async function ({to, subject, text, html}){
  let info = await transporter.sendMail({
      from: '"E-commerce" <harshitalakh124@gmail.com>', // sender address
      to,
      subject,
      text,
      html
    });
  return info;  
}