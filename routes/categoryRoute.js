const express = require('express');
const authMiddleware =require('../middlewares/authMiddleware');
const categoryController = require('../controllers/categoryController');


const router =express.Router();

//router
//create
router.post('/create-category',authMiddleware.requireSignIn,authMiddleware.isAdmin,categoryController.createCategoryController)

//update
router.put('/update-category/:id',authMiddleware.requireSignIn,authMiddleware.isAdmin,categoryController.updateCategoryController)

//get All category
router.get('/get-category',categoryController.AllcategoryController)
//single category
router.get('/single-category/:slug',categoryController.singleCategoryController)

//delete
router.delete('/delete-category/:id',authMiddleware.requireSignIn,authMiddleware.isAdmin,categoryController.deleteCategoryController)

module.exports= router;
