import express from "express"
import FormLayout from "../models/Signupmodel.js"
import bcrypt from "bcrypt"



const router = express.Router()

const Arr = []

router.post("/signup", (req,res) => {

    const signedUpUser = new FormLayout({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,

    })
    signedUpUser.save()
    .then(data => {
        res.json(data)
    })
    .then(data => Arr.push(data))
    .then(data => console.log(Arr))
    .catch(error => {
        res.json(error)
    })
})




   


export default router 