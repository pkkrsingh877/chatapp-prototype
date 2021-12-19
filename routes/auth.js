const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username, password: password });
        if(user){
            console.log(user);
            console.log("User logged in!");
        }else{
            console.log('Invalid Username or Password!');
        }
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/signup', async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const user = await User.create({
            name: name,
            username: username,
            email: email,
            password: password
        });
        console.log(user);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

module.exports = router;