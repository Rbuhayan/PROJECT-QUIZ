const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.render('index', { title: 'User List', users });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;