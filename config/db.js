const mongoose =require('mongoose');

const connectDB =async () => {
    try {
        const conn= await  mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb connection sucsess!");
    } catch (error) {
        console.log('Error in Mongodb',error);
    }
};
module.exports= connectDB;