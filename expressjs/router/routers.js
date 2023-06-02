const express=require("express");
const router=express.Router();
const connection=require("../Db/dbconnect");

router.get("/products",function(req,resp){
    connection.query("select * from products",(err,data)=>{
        if(err){
            resp.status(500).send("no data found"+JSON.stringify(err));
        }
        else{
            resp.render("index",{prodata:data})
        }
    })
})

//display blank form to user
router.get("/displayaddform",(req,resp)=>{
    resp.render("add-product")
})

router.post("/insertproduct",(req,resp)=>{
    var pid=req.body.pid;
    var pname=req.body.pname;
    var sal=req.body.price;
    var qty=req.body.qty;
    connection.query("insert into products values(?,?,?)",[pid,pname,sal,qty],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }
        else{
            resp.redirect("/products")
        }
    })
})
module.exports=router;