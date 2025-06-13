
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const authmiddleware = async(req, res, next ) =>{

  try{
    const token = req.header('Authorization')?.split(' ')[1];

    if(!token)
    {
      return res.status(401).json({ msg: "No Token, Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  }catch(err)
  {
    res.status(401).json({ msg:"Token not Valid !!" });
  }
};

module.exports = authmiddleware;