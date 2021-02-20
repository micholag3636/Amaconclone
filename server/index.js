import express from "express" 
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import routesUrls  from "./routes/routes.js"
import cors from "cors"

const app = express()
app.use(cors())
dotenv.config()




mongoose.connect(process.env.DCONNECT, () => console.log("databse connected"))
app.use(express.json())






app.use("/app", routesUrls)

app.listen(process.env.PORT || 5000, (req,res) => {
    console.log("App running on port 5000")
})


























