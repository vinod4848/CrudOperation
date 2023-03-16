const express = require("express");
const Product = require("../models/product");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const product = new Product({
    createdby: req.body.createdby,
    ProducName: req.body.ProducName,
    Price: req.body.Price,
    DPrice: req.body.DPrice,
    Ddescription: req.body.Ddescription,
    image: req.body.image,
  });

  try {
    const a1 = await product.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    let DPrice = product.Price;
    let discountedPrice = DPrice - DPrice * (20 / 100);
    // console.log(discountedPrice);
    product.Ddescription = req.body.Ddescription;
    product.DPrice = discountedPrice;
    const a1 = await product.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
module.exports = router;
