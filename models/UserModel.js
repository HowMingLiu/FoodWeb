const mongoose = require('mongoose');

const userShoppingCartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isDiscount: {
    type: Boolean,
    default: false
  },
  discountOff: {
    type: Number,
    default: 1
  },
  count: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
})

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  shoppingCart: [userShoppingCartSchema]
})

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;