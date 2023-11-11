const anyhttp = require('http');
const fs = require('fs');
const ex = require('express');

const app = ex();

app.use((req,res,next)=>{
    console.log("hello");
    next();
})


app.use((req,res,next)=>{
    console.log("hi");
    res.send("<h1>Hello from Express</h1>")
})

const server = anyhttp.createServer(app);
server.listen(5000);
// const rqListener = function(req,res){
//     // console.log(req.url)
//     // console.log(req.method)
//     // console.log(req.headers)
// const url = req.url;
// const method =req.method;

//     if(url=="/"){
//         res.setHeader("content-type","text/html")
//         res.write('<html><head><title>Login</title></head><body><form action="/message" method="POST"><input type="text" name="message"/><input type="submit" value="Send"/> </form></body></html>')
//         return 
//     }

//     if(url==="/message" && method==="POST"){

//         const body=[]
//         req.on('data',(chunk)=>{
//             body.push(chunk);
//             console.log(body)
//         })

//         req.on('end',()=>{
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split("=");
//             fs.writeFileSync("hello.txt",message[1])
//             fs.writeFileSync("hello.txt","Redirected proof");
//         })



//         res.setHeader("Location","/");
//         res.statusCode=302;
//         return res.end();
//     }


//     res.setHeader('content-type','text/html')
//     res.write('<html>')
//     res.write('<head><title>AS</title>');
//     res.write(
//         '<body><h1>Hi This is the data from Server[RESPONSE]</h1></body>'
//     )
//     res.write("</html>");
//     res.end();


// }

// const server = anyhttp.createServer(rqListener);

// server.listen(2000)