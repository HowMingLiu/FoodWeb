const express = require('express');
const router = express.Router();
const MenuModel = require('../../models/MenuModel');
const UserModel = require('../../models/UserModel');
const checkLoginMiddleware = require('../../middlewares/checkLoginMiddleware');

// /menu
// 獲取全部菜單
router.get('/', (req, res) => {
  MenuModel.find()
    .then(data => {
      res.json({
        code: '0000',
        msg: '獲取成功',
        data: data
      });
    })
});

router.get('/:user', (req, res) => {

  UserModel.find({username: req.params.user})
    .then(data => {
      res.json({
        code: '0000',
        msg: '獲取成功',
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
  UserModel.updateOne({username: req.params.user}, {shoppingCart: req.body})
    .then(data => {
      return UserModel.find({username: req.params.user})
    })
    .then(data => {
      res.json({
        code: '0000',
        msg: '更新成功',
        data: data[0].shoppingCart
      });
    })
});


module.exports = router;
