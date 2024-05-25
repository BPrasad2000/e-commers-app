const express = require('express');
const authMiddleware =require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');
const formidable =require('express-formidable')

const router =express.Router();

//routes
router.post('/create-product',authMiddleware.requireSignIn,authMiddleware.isAdmin,formidable(),productController.createProduct)
//update
router.put('/update-product/:pid',authMiddleware.requireSignIn,authMiddleware.isAdmin,formidable(),productController.updateProduct)

//get product
router.get('/get-product',productController.getAllProduct)

//single product
router.get('/get-product/:slug',productController.getSingleProduct)

//get photo
router.get('/product-photo/:pid',productController.ProductPhoto)

//delete
router.delete('/delete-product/:pid',productController.deleteProduct)

//filter product
router.post('/product-filters',productController.productFilter)

//product count
router.get('/product-count',productController.productCount)

//product per page
router.get('/product-list/:page',productController.productList)

//search product
router.get('/search/:keyword',productController.searchProduct)

//similar product
router.get('/related-product/:pid/:cid',productController.relatedProduct)

//category wise product
router.get('/product-category/:slug',productController.productCategory)

//payment Route
//token
router.get('/braintree/token',productController.braintreeToken)

//payments
router.post('/braintree/payment',authMiddleware.requireSignIn,productController.braintreePayment)


module.exports =router;

