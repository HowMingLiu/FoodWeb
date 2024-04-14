const express = require('express');
const router = express.Router();
const UserModel = require('../../models/UserModel');
const md5 = require('md5');

// 登入功能
router.post('/login', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let {username, password} = req.body;
  UserModel.findOne({
    username: username,
    password: md5(password),
  })
  .then(data => {
    console.log(data);
    if(!data) {
      return res.json({
        code: '1002',
        msg: '帳號或密碼錯誤',
        data: null
      });;
    }
    return res.json({
      code: '0004',
      msg: '登入成功',
      data: {
        username: data.username,
        password: md5(password)
      }
    });
  })
  .catch(err => {
    return res.json({
      code: '1003',
      msg: '登入失敗',
      data: null
    });
  })
})

// 註冊功能
router.post('/reg', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let {username, password, passwordCheck} = req.body;
  // 確認註冊密碼與確認密碼是否一致
  if(password !== passwordCheck) {
    return res.json({
      code: '1005',
      msg: '密碼確認失敗',
      data: null
    });
  }
  // 判斷數據庫是否有重複資料
  UserModel.findOne({username: username})
    .then(data => {
      if(!data) {
        // 新增帳號到數據庫
        return UserModel.create({username: req.body.username, password: md5(req.body.password)});
      }
      return res.json({
        code: '1006',
        msg: '用戶名已被使用',
        data: null
      });
    })
    .then(data => {
      if(data.username) {
        return res.json({
          code: '0005',
          msg: '註冊成功',
          data: {
            username: data.username,
            password: data.password
          }
        });
      }
    })
    .catch(err => {
      return res.json({
        code: '1007',
        msg: '註冊失敗，請聯絡客服',
        data: null
      });
    })
})

module.exports = router;