const express = require('express')
const schemas = require('../models/schemas')
const router = express.Router()


router.post('/allPosts',async (req,res)=>{
    const {genre,quotes} = req.body
    const postData = {genre:genre,quotes:quotes}
    const newPost = new schemas.Posts(postData)
    const savePost = await newPost.save()
    
})


router.get('/getPosts', async (req, res) => {
    const allPosts = schemas.Posts;
    try {
      const allPostsData = await allPosts.find({}).exec();
      if (allPostsData) {
        res.send(JSON.stringify(allPostsData));
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).send("Internal Server Error");
    }
  });
module.exports = router