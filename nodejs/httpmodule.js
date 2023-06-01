const http=require("http")
const url=require('url')
const m1=require('./mymodule')
const fs=require('fs')


const server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true);
    resp.writeHeader(200,{"content-type":"text/html"})
     switch(q.pathname)
     {
        case "/form":
         var rs=fs.createReadStream("./clientmodule.html")
         rs.pipe(resp);
         break;
        case "/submit-data":
            if(q.query.btn==="Submit")
            {
                var num=parseInt(q.query.num1);
                if(num<5)
                {
                    var ans=m1.factorial(num)
                    resp.write("<h2> factorial is::"+ans+"</h2>")
                }
                else if(num>=5 && num<10)
                {
                  
                    var ans=m1.printable(num)
                    resp.write("<h2> printable is::"+ans+"<br></h2>")
                }
                else {
                    var ans=m1.myprime(num)
                    resp.write("<h2> myprime is::"+ans+"</h2>")
                } 
            }
            resp.end();
            break;
            default:
                resp.write("some other page");
                resp.end("use /form url")
                break;
     }
})
server.listen(3002,function(){
    console.log("3002 running")
})