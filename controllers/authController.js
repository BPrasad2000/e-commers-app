const userModel = require("../models/userModel");
const orderModel = require("../models/orderModel");
const authHelper = require("../helpers/authHelper");
const JWT = require("jsonwebtoken");
const { json } = require("express");

const authController = {
  registerController: async (req, res) => {
    try {
      const { name, email, password, phone, address, answer } = req.body;

      //validation
      if (!name) {
        return res.send({ msg: "Name is Required" });
      }
      if (!email) {
        return res.send({ msg: "Email is Required" });
      }
      if (!password) {
        return res.send({ msg: "Password is Required" });
      }
      if (!phone) {
        return res.send({ msg: "Phone is Required" });
      }
      if (!address) {
        return res.send({ msg: "Address is Required" });
      }
      if (!answer) {
        return res.send({ msg: "Answer is Required" });
      }
      //check user
      const exsitingUser = await userModel.findOne({ email });

      if (exsitingUser) {
        return res.status(200).json({
          success: false,
          msg: "Already Register please ",
        });
      }
      //register user
      const hashedPassword = await authHelper.hashPassword(password);
      //save informtion
      const user = await new userModel({
        name,
        email,
        phone,
        address,
        password: hashedPassword,
        answer,
      }).save();

      res.status(201).json({
        success: true,
        msg: "User Register Sucsessfully",
        user,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  loginController: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ msg: "Invalid email or password" });
      }
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Email is not registerd" });
      }
      const match = await authHelper.comparePassword(password, user.password);
      if (!match) {
        return res.status(200).json({ msg: "Invalid Password" });
      }
      //token
      const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).json({
        success: true,
        msg: "Login Successfully",
        user: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  //forgot password
  forgotPasswordController: async (req, res) => {
    try {
      const { email, answer, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ msg: "Email is required" });
      }
      if (!answer) {
        res.status(400).send({ msg: "answer is required" });
      }
      if (!newPassword) {
        res.status(400).send({ msg: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(400).send({ msg: "Wrong email or answer" });
      }
      const hashed = await authHelper.hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res
        .status(200)
        .send({ msg: "Password reset Successfuly", success: true });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  //test
  testController: async (req, res) => {
    res.send("protect Route");
  },

  updateProfile: async (req, res) => {
    try {
      const { name, email, password, phone, address } = req.body;
      const user = await userModel.findById(req.user._id);
      if (password && password.length < 6) {
        return res.json({ error: "Password is required and 6 charecter long" });
      }
      const hashedPassword = password
        ? await authHelper.hashPassword(password)
        : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );

      res.status(200).send({
        success: true,
        msg: "Profile update Successfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        msg: "Error while updating profile",
        error,
      });
    }
  },

  //orders

  getOrders: async (req, res) => {
    try {
      const orders = await orderModel
        .find({ buyer: req.user._id })
        .populate("products", "-photo")
        .populate("buyer", "name");
        res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        msg: "Error While geting Orders",
        error,
      });
    }
  },
  
  //orders

  getAllOrders: async (req, res) => {
    try {
      const orders = await orderModel
        .find({})
        .populate("products", "-photo")
        .populate("buyer", "name")
        .sort({ createdAt: -1 })
        res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        msg: "Error While geting Orders",
        error,
      });
    }
  },

  //order status
  OrderStatus: async(req,res)=>{
    try {
      const {orderId}= req.params;
      const {status}=req.body;
      const orders =await orderModel.findByIdAndUpdate(orderId,{status},{new:true})
      res.json(orders);
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        msg: "Error While updateing Orders",
        error,
      })
    }
  }
};
module.exports = authController;
