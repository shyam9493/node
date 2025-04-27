const {MongoClient}=require('mongodb')

MongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
if(err){
    console.log(`error connecting`);
}else{
    users=db.collection('users');
    
}
});