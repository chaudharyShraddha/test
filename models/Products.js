const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number },
  price: { type: String, required: true },
});

module.exports = mongoose.model('products', Products);
