var express = require('express');
var router = express.Router();
var blogCtrl = require('../controllers/blog');

// Get list of Blogs
router.get('/blog', blogCtrl.getBlogs);
// Get a specific Blog
router.get('/blog/:blogid', blogCtrl.getBlog);
// Post a new Blog
router.post('/blog', blogCtrl.createBlog);
// Delete a Blog
router.delete('/blog/:blogid', blogCtrl.deleteBlog);

module.exports = router;
