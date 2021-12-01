// console.log("console.log he")
// for(var i=0;i<100;i++){
//     console.log(i)
// }
// console.log("loop off")



// var http=require("http");
// http.createServer(function(req,res){
// if(req.url==="/login"){
// res.end("login is working")
// }
// else if(req.url==="/signup"){
// res.end("signup working here")
// }
// else {
//     res.end("hello")
// }
// }).listen(4000);
import express from "express";
import bodyParser from "body-parser";


const app=express();


app.use(bodyParser.json({limit:"2mb"}));
app.use(bodyParser.urlencoded({extended:false}))

app.use((req,res)=>{
    console.log(req.body,"********")
    res.end()

})

app.listen(4000,()=>{
    console.log("=========srever started========")
})