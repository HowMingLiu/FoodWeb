const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if(req.session.username){
    res.member = '登出';
  }else{
    res.member = '登入';
  }
  next();
})

// 首頁
router.get('/home', (req, res) => {
  res.render('new/home', {member: res.member});
});

// 訂餐頁面
router.get('/cartDesktop', (req, res) => {
  res.render('new/cartDesktop', {member: res.member});
});

module.exports = router;
