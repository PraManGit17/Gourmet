const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const router = express.Router();

router.post('/signup', async (req, res) => {

  try {
    const { name, email, password } = req.body;

    const ifuserexists = await User.findOne({ email });

    if (ifuserexists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
    res.status(201).json({
      token, user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })
  } catch (err) {
    res.status(500).json({ msg: "SignUp error", error: err.message });
  }
});


router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;
    const userexists = await User.findOne({ email });

    if (!userexists) {
      return res.status(400).json({ msg: "User Not Found!! " });
    }

    const isMatch = await bcrypt.compare(password, userexists.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials !! " });
    }

    const token = jwt.sign({ id: userexists._id }, process.env.JWT_SECRET, { expiresIn: '4d' });
    res.json({
      token,
      user: {
        id: userexists._id,
        name: userexists.name,
        email: userexists.email
      }
    });

  } catch (err) {
      res.status(500).json({
        msg: "Login Failed",
        error: err.message
      })
  }
});

module.exports = router;