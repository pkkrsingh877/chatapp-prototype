const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    res.end();
});

router.post('/signup', (req, res) => {
    const { name, username, email, password } = req.body;
    console.log(req.body);
    res.end();
});

module.exports = router;