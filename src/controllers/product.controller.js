const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const User = require('../models/user.model')
const transporter = require('../configs/email')

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const user = await User.findById(product.user_id).lean().exec();
    console.log(user.email)

    const message = {
        from: "admin@ggn.com",
        to: user.email,
        subject: "New Product Created",
        text: "Product is Created",
        html: "<h1>Product is Created</h1>"
      };

      transporter.sendMail(message)

    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("", async (req, res) => {
  try {
    const page = +req.query.page || 1
    const size = +req.query.size || 5

    const skip = (page - 1) * size

    const products = await Product.find().skip(skip).limit(size).lean().exec()
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
