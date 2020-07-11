const express = require('express');
const config = require('config');
const multer = require('multer');

const router = express.Router();

const Products = require('../models/Products');
const Cart = require('../models/Cart');

// upload image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// restrict user to unwanted upload
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add product
router.post('/', upload.single('image'), async (req, res) => {
  const image = req.file.path;
  const { name, description, price } = req.body;

  try {
    const products = new Products({
      name,
      image,
      description,
      quantity: 0,
      price,
    });

    await products.save();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//add to cart
router.get('/add-to-cart/:id', async (req, res) => {
  let productId = req.params.id;

  let cart = new Cart(req.session.cart ? req.session.cart : {});

  Products.findById(productId, (err, product) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.json(cart);
  });
});

// Get cart items
router.get('/shopping-cart', (req, res) => {
  let cart = new Cart(req.session.cart);

  let cartValue = cart.generateArray();
  res.json(cartValue);
});

module.exports = router;
