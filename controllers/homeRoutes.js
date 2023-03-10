const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          // attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/postDetails/:post_id', withAuth, async(req,res)=>{
  console.log("Get post details for post: " + req.params.post_id);

  try{

      const postData = await Post.findByPk(req.params.post_id);
      const postCommentsData = await Comment.findAll({
        where:{post_id:req.params.post_id},
        include:[{model:User}]
      });

      const post = postData.get({plain:true});
      const postComments = postCommentsData.map(item => item.get({plain:true}));
      console.log(post);
      console.log(postComments);

      res.render('postDetails', {post, postComments, logged_in:true});
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
  

});
router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    console.log("The user is : " + req.session.user_id);
    const userPostsData = await Post.findAll({
      where: {user_id:req.session.user_id},
      include: [{ model: User , } ]     
    });

    const userPosts = userPostsData.map(userPost => userPost.get({ plain: true }));
console.log(userPosts);
    res.render('dashboard', {
      userPosts,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
