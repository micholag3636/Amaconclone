import express from "express" 
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import routesUrls  from "./routes/routes.js"
import cors from "cors"

const app = express()
app.use(cors())
dotenv.config()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });




mongoose.connect(process.env.DCONNECT, () => console.log("databse connected"))
app.use(express.json())






app.use("/app", routesUrls)

app.listen(process.env.PORT || 5000, (req,res) => {
    console.log("App running on port 5000")
})


























