//we dont need to use heavy framework to just create a server, for simple tasks we can use the http module!!
//To run we can just use node index (file_name) or (file_name.js)
const http=require('http')


http.createServer((req,res)=>{

}).listen(3000,()=>{
    console.log(`Running on port 3000`);
})