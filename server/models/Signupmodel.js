import mongoose from "mongoose"






const FormLayout = new mongoose.Schema ({
    firstname: {
        type: String,
        required: true
    },

    lastname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now()


    }


})


const FormModel = mongoose.model("FormModel", FormLayout)

export default FormModel


