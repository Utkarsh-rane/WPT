const mysql=require("mysql");

var mysqlconnect=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'utkarsh123',
    database:'expressdemo',
    port:3306
});
mysqlconnect.connect((err)=>{
    if(err){
        console.log("connection faield"+JSON.stringify(err));
    }
    else{
        console.log("connection successsful")
    }
})
module.exports=mysqlconnect;