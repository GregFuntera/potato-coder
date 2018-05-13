var express = require('express');
var cors = require('cors');
var router = express.Router();
var blogCtrl = require('../controllers/blog');
var app = express();

app.use(cors());

// Get list of Blogs
router.get('/blog', cors(), blogCtrl.getBlogs);
// Get a specific Blog
router.get('/blog/:blogid', cors(), blogCtrl.getBlog);
// Post a new Blog
router.post('/blog', cors(), blogCtrl.createBlog);
// Update a blog
router.put('/blog/:blogid', cors(), blogCtrl.updateBlog);
// Delete a Blog
router.delete('/blog/:blogid', cors(), blogCtrl.deleteBlog);

module.exports = router;
