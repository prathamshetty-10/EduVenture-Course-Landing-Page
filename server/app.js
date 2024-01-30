import config from 'dotenv'
config.config();
import express from 'express';
const app=express();
import cors from 'cors'

import userRoutes from './routes/userroutes.js';
import courseRoutes from './routes/courseroutes.js'
import errorMiddleware from './middleware/error.middleware.js';
import paymentRoutes from './routes/paymentroutes.js'
import miscRoutes from './routes/miscellaneousroutes.js';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';

app.use(express.json());//allowing json data to be sent
app.use(express.urlencoded({extended:true}))
//app.use(cors({
    //origin:[process.env.FRONTEND_URL],//allowed localhost:3000 client the access
   // credentials:true
//}))
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header( "Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS")
    next();
})

app.use(cookieParser());
app.use(morgan('dev'))//for log management


app.use('/ping',(req,res)=>{//just to check if server running
    res.status(200).json({data:'JWTauth server hi pong'});
});
//routes of 3 modules
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/courses',courseRoutes);
app.use("/api/v1/payment",paymentRoutes)
app.use('/api/v1', miscRoutes);


//if user hits some wierd url
app.all('*',(req,res)=>{
    res.status(404).send('OOPS!!! 404 page not found');

})
//generic error handler
app.use(errorMiddleware);
export default app;
