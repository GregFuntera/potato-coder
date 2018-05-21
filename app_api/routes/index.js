var express = require('express');
var router = express.Router();
var blogCtrl = require('../controllers/blog');
var app = express();

// Get list of Blogs
router.get('/blog', blogCtrl.getBlogs);
// Get a specific Blog
router.get('/blog/:blogid', blogCtrl.getBlog);
// Post a new Blog
router.post('/blog', blogCtrl.createBlog);
// Update a blog
router.put('/blog/:blogid', blogCtrl.updateBlog);
// Delete a Blog
router.delete('/blog/:blogid', blogCtrl.deleteBlog);
// Get archive list
router.get('/archives', blogCtrl.getBlogsArchive)

module.exports = router;
