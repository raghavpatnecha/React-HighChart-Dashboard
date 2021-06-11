import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import advertisementSpentRoutes from "./routes/advertisementSpent.js";



const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.use('/api/advspentroutes', advertisementSpentRoutes);


app.get("/", (req, res)=>                       
    res.status(200).send("welcome to api")
);

const MONGO_URI  = process.env.MONGO_URI ;

//
mongoose.connect(MONGO_URI , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => app.listen(5000, () => console.log('Server running on http://localhost:5000')))
    .catch(err => console.log(err));


