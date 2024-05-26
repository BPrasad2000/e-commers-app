const { count } = require("console");
const productModel = require("../models/productModel");
const categoryModel =require("../models/CategoryModel");
const orderModel =require("../models/orderModel");
const fs =require('fs')
const slugify = require('slugify')
const braintree =require('braintree')
const dotenv =require('dotenv');

dotenv.config();
//payment gateway
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});


const productController = {
  createProduct: async (req, res) => {
    try {
      const { name, slug, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;

      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Price is Required" });
        case !category:
          return res.status(500).send({ error: "Category is Required" });
        case !quantity:
          return res.status(500).send({ error: "quantity is Required" });
        case photo && photo.size > 1000000:
          return res
            .status(500)
            .send({ error: "Photo is Required and Should be lesthan 1Mb" });
      }
      const products = new productModel({ ...req.fields, slug: slugify(name) });
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }
      await products.save();
      res.status(201).send({
        success: true,
        msg: " product create successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        msg: "error in creating product",
      });
    }
  },
  getAllProduct: async (req, res) => {
    try {
      const products = await productModel
        .find({})
        .populate("category")
        .select("-photo")
        // .limit(12)
        .sort({ createdAt: -1 });

      res.status(200).send({
        success: true,
        countTotal: products.length,
        msg: " All Product ",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        msg: "error in getting product",
      });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const product = await productModel
        .findOne({ slug: req.params.slug })
        .select("-photo")
        .populate("category");

      res.status(200).send({
        success: true,
        msg: " Single Product Fretch ",
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        msg: "error while getting single product",
      });
    }
  },
  ProductPhoto: async (req, res) => {
    try {
      const product = await productModel
        .findById(req.params.pid)
        .select("photo");
      if (product.photo.data) {
        res.set("Content-type", product.photo.contentType);
        return res.status(200).send(product.photo.data);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        msg: "error while getting photo",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await productModel.findByIdAndDelete(req.params.pid).select("-photo");
      res.status(200).send({
        success: true,
        msg: "Product Delete successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        msg: "error while deleting product",
      });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { name, slug, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;

      switch (true) {
        case !name:
          return res.status(500).send({ error: "Name is Required" });
        case !description:
          return res.status(500).send({ error: "Description is Required" });
        case !price:
          return res.status(500).send({ error: "Price is Required" });
        case !category:
          return res.status(500).send({ error: "Category is Required" });
        case !quantity:
          return res.status(500).send({ error: "quantity is Required" });
        case photo && photo.size > 1000000:
          return res
            .status(500)
            .send({ error: "Photo is Required and Should be lesthan 1Mb" });
      }
      const products = await productModel.findByIdAndUpdate(req.params.pid,
        {...req.fields,slug:slugify(name)},{new:true}
        )
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }
      await products.save();
      res.status(201).send({
        success: true,
        msg: " product updated successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        msg: "error in update product",
      });
    }
  },
  productFilter : async (req,res) =>{
     try {
      const {checked,radio} =req.body
      let args= {}
      if(checked.length>0) args.category =checked
      if(radio.length)args.price ={$gte:radio[0],$lte:radio[1]}
      const products = await productModel.find(args)
      res.status(200).send({
        success:true,
        products
      })
     } catch (error) {
      console.log(error)
      res.status(400).send({
        success: false,
        error,
        msg:"error while filtering products",
      })
     }
  },
  productCount : async(req,res) =>{
    try {
      const total =await productModel.find({}).estimatedDocumentCount()
      res.status(200).send({
        success:true,
        total

      })
    } catch (error) {
      console.log(error)
      res.status(400).send({
        success:false,
        msg:'error in product count',
        error
      })
    }
  },
  //product  page
  productList: async(req,res)=>{
    try {
      const perPage = 12;
      const page = req.params.page? req.params.page :1;
      const products = await productModel.find({})
      .select("-photo")
      .skip((page-1)*perPage)
      .limit(perPage)
      .sort({createdAt :-1});
      res.status(200).send({
        success:true,
        products
      })
    } catch (error) {
      console.log(error)
      res.status(400).send({
        success:false,
        msg:'error per page ctrl',
        error
      })
    }
  },
  searchProduct : async(req,res)=>{
    try {
      const {keyword} =req.params
      const results  = await productModel.find({
        $or:[
          {name:{ $regex:keyword,$options:'i'}},
          {description:{ $regex:keyword,$options:'i'}}
        ]
      })
      .select("-photo")
      res.json(results)
    } catch (error) {
      console.log(error)
      res.status(400).send({
        success:false,
        msg:"error in search productApi",
        error
      })
    }
  },
  relatedProduct : async (req,res)=>{
    try {
      const {pid,cid} =req.params
      const products =await productModel.find({
        category: cid,
        _id:{$ne:pid},
      }).select('-photo').limit(3).populate("category");
      res.status(200).send({
        success:true,
        products,
      })
    } catch (error) {
      console.log(error)
      res.status(400).send({
        success: false,
        msg:'Error while geting related product',
        error
      })
    }
  },
  productCategory: async(req,res)=>{
    try {
      const category =await categoryModel.findOne({slug:req.params.slug})
      const products =await productModel.find({category}).populate('category')
      res.status(200).send({
        success:true,
        category,
        products,
      })
    } catch (error) {
      console.log(error)
      res.status(400).send({
        success: false,
        msg:'Error while geting products',
        error
      })
    }
  },
  //pament Api
  //payment token
  braintreeToken: async(req,res) => {
    try {
      gateway.clientToken.generate({}, function (err,response){
        if(err){
          res.status(500).send(err);
        }else{
          res.send(response);
        }
      })
    } catch (error) {
      console.log(error)
    }
  },

  //paymet
  braintreePayment: async (req,res) => {
    try {
      const {cart,nonce} =req.body
      let total=0;
      cart.map((i)=>{
        total += i.price
      })
      let newTransaction =gateway.transaction.sale({
        amount:total,
        paymentMethodNonce:nonce,
        options:{
          submitForSettlement:true,
        },
      },
      function(error,result){
        if(result){
          const order = new orderModel({
            products: cart,
            payment:result,
            buyer :req.user._id
          }).save()
          res.json({ok:true})
        }else{
          res.status(500).send(error)
        }
      }
    
    )
    } catch (error) {
      console.log(error)
    }
  },
};

module.exports=productController;