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
   // origin:['*'],//allowed localhost:3000 client the access
  // credentials:true
//}))
app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "*"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });

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
