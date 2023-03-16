
/////////routes in product /////////////
const express = require('express')
const router = express.Router()
const Product = require('../models/product')


router.get('/', async (req, res) => {
    try {
        const product = await Product.find()
        res.json(product)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (err) {
        res.send('Error ' + err)
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id)
//         let DPrice = product.Price
//         let discountedPrice = DPrice - (DPrice * (35 / 100));
//         console.log(discountedPrice);
//         res.json(product)
//     } catch (err) {
//         res.send('Error ' + err)
//     }
// })

router.post('/', async (req, res) => {
    const product = new Product({
        createdby: req.body.createdby,
        ProducName: req.body.ProducName,
        Price: req.body.Price,
        DPrice: req.body.DPrice,
        Ddescription: req.body.Ddescription,
        image: req.body.image
    })

    try {
        const a1 = await product.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        let DPrice = product.Price
        let discountedPrice = DPrice - (DPrice * (20 / 100));
        // console.log(discountedPrice);
        product.Ddescription = req.body.Ddescription
        product.DPrice = discountedPrice
        const a1 = await product.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})
module.exports = router





//////////////////user/////////////////////////
const express = require("express")
const Srouter = express.Router()
const User = require("../models/user")

router.post('/creatUser', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        image: req.body.image
    })

    try {
        const user1 = await user.save()
        res.json(user1)
    } catch (error) {
        console.log(error);
        res.send("Error")

    }
})

router.get('/getUsers', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        res.send('Error' + err)

    }
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.send("Error" + err)

    }
})

router.post('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.json(user)
    } catch (error) {
        res.send("Error" + err)

    }
})

router.post('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.userName = req.body.userName
        user.image = req.body.image
        const a1 = await user.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }

})

module.exports = router





/////////////////////user module/////
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
