const mongoose = require('mongoose')
const categoryModel = new mongoose.Schema({
    categoryName:{
        type:String,
        required: { value: true, message: "Please Enter CategoryName" },
        lowercase: true   
    }
},{
    timestamps:true
})
moudule.exports = mongoose.model('category',categoryModel)