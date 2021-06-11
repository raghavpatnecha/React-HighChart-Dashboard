import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import advertisementSpentRoutes from "./routes/advertisementSpent.js";



const app = express();

// below three are middlewares
app.use(cors()); //api hit access by any url address
app.use(express.json()); // api calls convert to json format
app.use(express.urlencoded({extended: true})); 
app.use('/api/advspentroutes', advertisementSpentRoutes);
//app.get("/", (req, res)=> { 
//    return res.status(200).send("welcome to api")
//});

app.get("/", (req, res)=>                       //arrow functions
    res.status(200).send("welcome to api")
);

const MONGO_URI  = process.env.MONGO_URI ;

//
mongoose.connect(MONGO_URI , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => app.listen(5000, () => console.log('Server running on http://localhost:5000')))
    .catch(err => console.log(err));
//app.listen(5000, () => console.log("hello"));



//callback - function ke complete hone ke baad koi dusre function ko call karna