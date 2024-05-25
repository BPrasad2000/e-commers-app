const categoryModel =require('../models/CategoryModel')
const slugify = require('slugify')
const categoryController={
        createCategoryController : async (req,res)=>{
            try {
                const {name} = req.body
                if(!name){
                    return res.status(401).send({msg:"Name is Required"})
                }
                const existingCategory = await categoryModel.findOne({name})
                if(existingCategory){
                    return res.status(200).send({
                        success:true,
                        msg:'Category alredy exisits',
                    })
                }
                const category =await new categoryModel({name, slug:slugify(name)}).save()
                res.status(201).send({
                    success:true,
                    msg:' new Category created',
                    category
                })
                
            } catch (error) {
                res.status(500).send({
                    success:false,
                    error,
                    msg:'error in category',
                    })
            }
        },
        updateCategoryController:async (req,res)=>{
            try {
                const {name}=req.body
                const {id}=req.params
                const category= await categoryModel.findByIdAndUpdate(
                    id,{name,slug:slugify(name)},{new:true})
                res.status(200).send({
                    success:true,
                    msg:'Category updated Successfully',
                    category
                })
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    error,
                    msg:'error while updating category',
                    })

            }

        },
        AllcategoryController: async(req,res)=>{
            try {
                const category= await categoryModel.find({})
                    
                res.status(200).send({
                    success:true,
                    msg:'All Category List',
                    category
                })
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    error,
                    msg:'error while getting All category',
                    })
            }
        },
        singleCategoryController : async (req,res) =>{
            try {
                
                const category= await categoryModel.findOne({slug:req.params.slug})
                res.status(200).send({
                    success:true,
                    msg:'Get Single Category Successfully',
                    category
                })
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    error,
                    msg:'error while getting Single category',
                    })
            }

        },
        deleteCategoryController : async(req,res) =>{
            try {
                const {id} =req.params
                await categoryModel.findByIdAndDelete(id)
                res.status(200).send({
                    success:true,
                    msg:'Category Deleting Successfully',
                    
                })
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success:false,
                    error,
                    msg:'error while deleting category',
                    })
            }
        }
}

module.exports = categoryController;