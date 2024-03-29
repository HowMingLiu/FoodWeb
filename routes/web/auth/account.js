const express = require('express');
const router = express.Router();
const UserModel = require('../../../models/UserModel');
const md5 = require('md5');


// 登入頁面
router.get('/login', (req, res) => {
  if(req.session.username){
    return res.redirect('/food//home');
  }
  res.render('auth/reg', {status: '登入'});
})

// 註冊頁面
router.get('/reg', (req, res) => {
  res.render('auth/reg', {status: '註冊'});
})

// 登入功能
router.post('/login', (req, res) => {
  let {username, password} = req.body;

  UserModel.findOne({
    username: username,
    password: md5(password),
  })
  .then(data => {
    console.log(data);
    if(!data) {
      return res.render('auth/promptPage', {msg: ':> 帳號或密碼錯誤', url: '/account/login'});
    }
    // 登入成功時寫入 session
    req.session.username = data.username;
    req.session._id = data._id;
    res.cookie('username', data.username)

    return res.render('auth/promptPage', {msg: ':> 登入成功', url: '/food/home'});
  })
  .catch(err => {
    return res.render('auth/promptPage', {msg: ':> 登入失敗', url: '/account/login'});
  })
})

// 註冊功能
router.post('/reg', (req, res) => {
  let {username, password, passwordCheck} = req.body;
  if(password !== passwordCheck) {
    return res.render('auth/promptPage', {msg: ':> 密碼確認失敗', url: '/account/reg'});
  }
  // 判斷數據庫是否有重複資料
  UserModel.findOne({username: username})
    .then(data => {
      if(!data) {
        // 新增帳號到數據庫
        return UserModel.create({...req.body, password: md5(req.body.password)});
      }
      return res.render('auth/promptPage', {msg: ':> 帳戶名已被使用', url: '/account/reg'});
    })
    .then(data => {
      return res.render('auth/promptPage', {msg: ':> 註冊成功', url: '/account/login'});
    })
    .catch(err => {
      return res.render('auth/promptPage', {msg: ':> 註冊失敗', url: '/account/reg'});
    })
})

// 退出登入功能
router.get('/logout', (req, res) => {

  req.session.destroy(() => {
    res.clearCookie('username');
    res.render('auth/promptPage', {msg: '登出成功', url: '/food/home'});
  })
})


module.exports = router;