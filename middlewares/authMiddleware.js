const JWT=require('jsonwebtoken');
const userModel = require('../models/userModel');

const authMiddleware={
//protected Routes token base
 requireSignIn: async (req,res,next)=>{
    try {
        const decode =JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
       req.user=decode;
        next();

    } catch (error) {
        console.log(error)
    }

},
 isAdmin :async(req,res,next) =>{
    try {
        const user =await userModel.findById(req.user._id)
        if(user.role !== 1 ){
            return res.status(400).json({msg: "UnAuthorized Access"})
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:error.message})

    }

 }
}
module.exports=authMiddleware;