//creating server
const express = require("express");
const app = express();
//server config
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(9999, (err, success) => {
  if (err) {
    console.log("Error Creating server");
  } else {
    console.log("Server Started On Port 9999 :)");
  }
});
//database
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/mean23")
  .then((data) => {
    console.log("Database  Connected :)");
  })
  .catch((err) => {
    console.log("Error Connecting Database :)");
  });
//links
const productRoutes = require('./App/Routes/productRoutes')
const categoryRoutes = require('./App/Routes/productRoutes')
//routes
app.use("/product",productRoutes)
app.use("/category",categoryRoutes)