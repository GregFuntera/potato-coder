var express = require('express');
var router = express.Router();
var blogCtrl = require('../controllers/blog');

router.get('/blog', blogCtrl.getBlog);

module.exports = router;
