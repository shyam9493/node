//we dont need to use heavy framework to just create a server, for simple tasks we can use the http module!!
//To run we can just use node index (file_name) or (file_name.js)
const http=require('http')
const fs=require('file-system')

http.createServer((req,res)=>{
    // res.write(req.url);



    try{
    console.log(req.url);
    let fc=fs.readFileSync(`.${req.url}`,'utf8');
    fs.writeFileSync(`.${req.url}`,`${fc} \n New content appended`,"utf8")  
    res.write(fs.readFileSync(`.${req.url}`,'utf8')); //prints files requested in url
    res.end()
    }catch(err){
        res.write("No such file");
    }
}).listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Running on port 3000`);
    }
})



//file-system
/*
fs.readFileSync
fs.writeFileSync
fs.rename
fs.unlink -> delete file
*/

//http module
/*
res.write -> similar to res.send in express
*/

//Modules Installed
/*
http
file-system

*/