const http = require('http');
const fs = require('fs');
const port = 9000;

function requestHandler(req , res){
    console.log(req.url);
    let filePath;
    switch(req.url){
        case '/signup' : 
            filePath = './signup.html'
              break;
        case '/login' :
            filePath = './login.html'
            break;
        case '/eventlist' :
            filePath = './eventlist.html'
            break;
        case '/eventregister' :
            filePath = './eventregister.html'
            break;  
            default :
            filePath = './404.html'  
    }
     fs.readFile( filePath ,function(err , data){
        if(err){
            console.log('erroe',err);
            return res.end('<h1>error</h1>');
        }
        return res.end(data);
     });
}
const server = http.createServer(requestHandler);
server.listen(9000 , function(err){
    if(err){
        console.log("err");
       res.end('<h1>error</h1>');
        return;
         }
    console.log("server is running at : ",port);
});