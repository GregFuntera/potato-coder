var express = require('express');
var router = express.Router();
var blogs = require('../controllers/blogs')

/* GET home page. */
router.get('/', blogs.blogList);
router.get('/blog/blogid', blogs.blogView)

module.exports = router;
