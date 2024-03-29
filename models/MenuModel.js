const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  photoSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  engTitle: {
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
})

const MenuModel = mongoose.model('menus', MenuSchema);

module.exports = MenuModel;