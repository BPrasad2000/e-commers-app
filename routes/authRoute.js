const express =require('express');
const authController=require('../controllers/authController');
const authMiddleware=require('../middlewares/authMiddleware')

const router= express.Router()

router.post('/register',authController.registerController)

router.post('/login',authController.loginController)

//testroute
router.get('/test',authMiddleware.requireSignIn,authMiddleware.isAdmin,(authController.testController))

//protected user Route auth
router.get('/user-auth',authMiddleware.requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});
//protected admin Route auth
router.get('/admin-auth',authMiddleware.requireSignIn,authMiddleware.isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

//forgot password
router.post('/forgot-password',authController.forgotPasswordController)

//update profile
router.put('/profile',authMiddleware.requireSignIn,authController.updateProfile)

//orders
router.get('/orders',authMiddleware.requireSignIn,authController.getOrders)

// All orders
router.get('/all-orders',authMiddleware.requireSignIn,authMiddleware.isAdmin,authController.getAllOrders)

// order status update
router.put('/order-status/:orderId',authMiddleware.requireSignIn,authMiddleware.isAdmin,authController.OrderStatus)

module.exports=router;