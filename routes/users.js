const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({});
        console.log(posts);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

router.post('/post', async (req, res) => {
    try {
        const { title, body, image } = req.body;
        const post = await Post.create({
            title: title,
            body: body,
            image: image
        });
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
})

router.get('/profile', (req, res) => {
    res.send('');
});

module.exports = router;