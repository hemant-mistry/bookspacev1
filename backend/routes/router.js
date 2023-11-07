const express = require('express')
const router = express.Router()


router.post('/allPosts',(req,res)=>{
    const {genre,quotes} = req.body
    console.log(genre, quotes)
    res.send('Message sent thank you!')
})
router.get('/users',(req,res)=>{
    const userData = [
        {
            Question: "Hey"
        }
    ]
    res.send(userData)
})

module.exports = router