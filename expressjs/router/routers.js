const express=require("express");
const router=express.Router();
const connection=require("../Db/dbconnect");

router.get("/loginuser",(req,resp)=>{
    resp.render("login")
})



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
    var price=req.body.price;
    var qty=req.body.qty;
    connection.query("insert into products values(?,?,?,?)",[pid,pname,price,qty],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }
        else{
            resp.redirect("/products")
        }
    })
})
router.get("/edit/:pid",(req,resp)=>{
    console.log("pid ",req.params.pid)
    connection.query("select * from products where pid=?",[req.params.pid],(err,data)=>{
        console.log(data);
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }else{
            resp.render("update-product",{pro:data[0]});
        }
    })
})
router.post("/updateproduct",(req,resp)=>{
      var pid=req.body.pid;
      var pname=req.body.pname;
      var price=req.body.price;
      var qty=req.body.qty;
      connection.query("update products set pname=?,price=?, qty=? where pid=? ",[pname,price,qty,pid],(err)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }else{
            resp.redirect("/products")
        }
      })
})
router.get("/delete/:pid",(req,resp)=>{
    connection.query("delete from products where  pid=?",[req.params.pid],(err)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err));
        }else{
            resp.redirect("/products")
        }
    })
})
module.exports=router;