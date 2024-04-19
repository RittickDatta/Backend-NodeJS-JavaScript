module.exports = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.send('Not Authenticated');
  }
  next();
};
