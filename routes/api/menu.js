const express = require('express');
const router = express.Router();
const MenuModel = require('../../models/MenuModel');
const UserModel = require('../../models/UserModel');
// /menu
// 獲取全部菜單
router.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  MenuModel.find()
    .then(data => {
      res.json({
        code: '0001',
        msg: '總菜單獲取成功',
        data: data
      });
    })
});

router.get('/:user', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let username = req.params.user.split("&")[0];
  let password = req.params.user.split("&")[1];
  
  UserModel.find({username: username, password: password})
    .then(data => {
      res.json({
        code: '0002',
        msg: '個人購物車獲取成功',
        data: data[0].shoppingCart
      });
    })
    .catch(err => {
      res.json({
        code: '1001',
        msg: '並無使用者資料',
        data: null
      });
    })
});

router.patch('/:user/shoppingCart', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let username = req.params.user.split("&")[0];
  let password = req.params.user.split("&")[1];

  UserModel.updateOne({username: username, password: password}, {shoppingCart: req.body})
    .then(data => {
      return UserModel.find({username: username, password: password})
    })
    .then(data => {
      res.json({
        code: '0003',
        msg: '個人購物車更新成功',
        data: data[0].shoppingCart
      });
    })
    .catch(err => {
      return res.json({
        code: '1004',
        msg: '個人購物車更新失敗',
        data: null
      });
    })
});

// 處理 preflight 
router.options('/:user/shoppingCart', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PATCH')
  res.header('Access-Control-Allow-Headers', 'content-type')
  res.end()
})


module.exports = router;
