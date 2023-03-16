const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/creatUser", async (req, res) => {
  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
  });

  try {
    const user1 = await user.save();
    res.json(user1);
  } catch (error) {
    console.log(error);
    res.send("Error");
  }
});

router.get("/getUsers", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.send("Error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.send("Error" + err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    res.send("Error" + err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.userName = req.body.userName;
    user.image = req.body.image;
    const a1 = await user.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
