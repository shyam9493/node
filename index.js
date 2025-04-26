//we dont need to use heavy framework to just create a server, for simple tasks we can use the http module!!
//To run we can just use node index (file_name) or (file_name.js)
const http=require('http')
const fs=require('file-system')

http.createServer((req,res)=>{
    // res.write(req.url);
    console.log(req.url);
    fs.writeFileSync(`.${req.url}`,"Name","utf8")  
    res.write(fs.readFileSync(`.${req.url}`,'utf8')); //prints files requested in url
    res.end()
}).listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Running on port 3000`);
    }
})



//Modules Installed
/*
http
file-system

*/