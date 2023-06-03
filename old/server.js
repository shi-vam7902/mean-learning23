const express = require("express");
const royalCalc = require('./royalCalc')
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/login", (req, res) => {
  res.end("Login called");
});
app.post("/calc",royalCalc.calc)

app.listen(9999, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("Server Started on 9999");
  }
});

app.get("/time",(req,res)=>{
    let d = new Date()
    res.end(d+"")
})

app.get("/",(req,res)=>{

    res.end("Welome")
})
// const http = require("http")
// http.createServer(function(req,res){
//     console.log("server started on 9999"+req.url);
//     res.end("http works requesting ..")
// }).listen(9999);

// // console.log('server started on 9999');
// // console.log(http);
