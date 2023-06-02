const express=require("express");
const log=express()
const path=require("path")
const bodyparser=require("body-parser")
const routes=require("./router/routers")

log.use(bodyparser.urlencoded({extended:false}))

log.set("views",path.join(__dirname,"views"));
log.set("view engine","ejs");
log.set(express.static(path.join(__dirname,"public")))

log.use("/",routes)

log.listen(3003,function(){
    console.log("server running at port 3002")
})
module.exports=log;