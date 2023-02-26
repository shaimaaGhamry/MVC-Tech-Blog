const router = require('express').Router();
const { User,Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');




router.post('/addPost',withAuth, async(req,res) =>{
    
    try{
        const newPost = await Post.create({...req.body, user_id:req.session.user_id});
        res.status(200).json(newPost);

    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:post_id', withAuth, async(req,res)=>{
    try{
        const deletedPost = await Post.destroy({
            where:{id:req.params.post_id},
        });

        res.status(200).json(deletedPost);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:post_id', withAuth, async(req,res)=>{

    try{
        const updatedPost = await Post.update({
            post_title:req.body.post_title,
            post_content:req.body.post_content},{

            where:{id:req.params.post_id},
        });

        res.status(200).json(updatedPost);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/addComment',withAuth, async (req,res)=>{
    console.log("==========inside add comment");
console.log(req.body);


    try{
        const newComment = await Comment.create({...req.body, user_id:req.session.user_id});
        res.status(200).json(newComment);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});
module.exports = router;
