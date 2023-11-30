const express = require('express');


const cors = require('cors');


const app = express();


app.use(cors());

app.post("/mailadmin",(req,res)=>{
    const a = req.body;
    console.log(a);
   res.json({status:'ding dong'})
});    


app.listen(3000,() =>{
    
    console.log('server is running on port 3000');
});