const express=require('express');
const app=express();
const mongoose=require('mongoose');
const postroute=require('./routes/posts');
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use('/posts',postroute);
require('dotenv/config');
mongoose.connect(
    process.env.DB_CONNECTION,
   
    { useNewUrlParser: true ,useUnifiedTopology: true},
    
()=>{
    console.log("MongoDB Connected")
});
app.get('/',(req,resp)=>{
    resp.send('we are on home');
})

app.listen(3000);
