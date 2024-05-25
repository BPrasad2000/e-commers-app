const express =require('express');
const dotenv =require('dotenv');
const morgan =require('morgan');
const  connectDB = require('./config/db');
const authRoutes =require('./routes/authRoute')
const categoryRoute =require('./routes/categoryRoute')
const productRoute =require('./routes/productRoute')
const cors= require('cors')

dotenv.config();

connectDB();

const app =express();

//middelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoute);
app.use('/api/v1/product',productRoute);


app.get("/",(req,res)=>{
    res.send(" welcome")
});


const PORT= process.env.PORT||8080;

app.listen(PORT,()=>{
    console.log("Sever is Running on Port :",PORT);
})