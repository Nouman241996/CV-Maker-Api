const express=require('express');
const router=express.Router();
const Post=require('../Models/Post')
router.get('/',async (req,res)=>{
    try{
        const post=await Post.find();
        res.json(post);

    }catch(err){
        res.json({message:err});
    }
})
router.get('/:postid',async (req,res)=>{
    try{
        const post=await Post.findById(req.params.postid);
        res.json(post);

    }catch(err){
        res.json({message:err});
    }
})
router.post('/',async (req,res)=>{
   
    const post= new Post(
        {
            personalinfo: req.body.personalinfo,
            education: req.body.education,
            work: req.body.work,
            skills: req.body.skills,
            hobbies: req.body.hobbies
        }
        
    );
   
   try{
       
       const savedpost= await post.save();
       res.json(savedpost);
   }catch(err){
       res.json({message:err});
   }
});

router.delete('/:postid',async(req,res)=>{
    try{
    const postremoved=await Post.remove({_id:req.params.postid})
    res.json(postremoved);
    }
    catch(err){
        res.json({message:err});
    }
});
router.put('/:postid',async(req,res)=>{
    try{
    const postupdate=await Post.updateOne({_id:req.params.postid})
    res.json(postupdate);
    }
    catch(err){
        res.json({message:err});
    }
});
module.exports=router;