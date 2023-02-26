const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/newPost', async (req,res)=>{
    res.render("newPost", {logged_in:true} );
});

module.exports = router;
