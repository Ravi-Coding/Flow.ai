import express from "express";

import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import apiRoutes from "./routes/api.js";

dotenv.config();  // for env

const app = express();
const PORT = process.env.PORT || 3004;

connectDB(); // waoo connected successfully

app.use(cors());                   // middleware is also working
app.use(express.json());

app.get("/",(req,res)=>{           // yes , working
    res.send("Waoo great This is ExpenseTracker API");

});

app.use("/api",apiRoutes);          // for each endpoints, its also working

app.listen(PORT,()=>{
    console.log(`Waoo Server running on port ${PORT}`);
});