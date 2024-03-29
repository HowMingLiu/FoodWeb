// 檢測登入的中介軟體
module.exports = function (req, res, next) {
  if(!req.session.username) {
    return res.redirect('/account/login');
  }
  next();
}