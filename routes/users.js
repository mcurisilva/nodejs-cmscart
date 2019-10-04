var express = require('express');
var router = express.Router();
var passport = require('passport');
var bbrupt = require('bcryptjs');

var Users = require('../models/user');

// Get register
router.get('/register', function(req, res) {
    res.render('register', {
        title: 'Register'
    });
});


module.exports = router;