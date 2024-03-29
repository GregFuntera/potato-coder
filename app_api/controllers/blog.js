var mongoose = require('mongoose');

var blog = mongoose.model('blog');

var sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content)
}

// Get List of blogs
module.exports.getBlogs = function(req, res) {
  var is_published = req.query.is_published;
  if(is_published === undefined) {
   is_published = true;
  }
  blog
  .find({is_published: is_published})
  .select('title summary featured_photo created_at youtube_stats')
  .sort([['created_at', -1]])
  .exec(function(error, blogs) {
    if(error) {
      sendJSONResponse(res, 400, error);
    } else {
      sendJSONResponse(res, 200, blogs);
    }
  });
}
// Get Blog by id
module.exports.getBlog = function(req, res) {
  var blogid = req.params.blogid;
  console.log(blogid);
  if(req.params && req.params.blogid) {
    blog
      .findById(blogid)
      .exec(function(error, blog) {
        if(!blog) {
          sendJSONResponse(res, 404, {
            message: 'blog id not found'
          });
        } else if(error) {
          sendJSONResponse(res, 400, error);
        } else {
          sendJSONResponse(res, 200, blog);
        }
    });
  } else {
    sendJSONResponse(req, 404, {
      message: 'No request for blog id'
    });
  }
};
// Create new Blog
module.exports.createBlog = function(req, res) {
  var title = req.body.title,
      body = req.body.body,
      featured_photo = req.body.featured_photo,
      summary = req.body.summary;
      is_published = req.body.is_published;
      youtube_stats = req.body.youtube_stats;

  if(!title && !body && !featured_photo && !summary) {
    sendJSONResponse(res, 404, {
      message: 'title, body, summary and featured photo is required'
    });
  } else {
    blog.create({
      title: title,
      body: body,
      featured_photo: featured_photo,
      summary: summary,
      youtube_stats: youtube_stats,
      is_published: is_published
    }, function(error, blog) {
      if(error) {
         sendJSONResponse(res, 400, error);
       } else {
         sendJSONResponse(res, 201, blog);
       }
    });
  }
}
// Update a blog
module.exports.updateBlog = function(req, res) {
  var blogid = req.params.blogid;
  if(!blogid) {
    sendJSONResponse(res, 404, {
      message: 'blog id not found'
    });
  } else {
    blog
      .findById(blogid)
      .exec(function(error, blog) {
        if(!blog) {
          sendJSONResponse(res, 404, {
            message: 'blog id not found'
          });
        } else if(error) {
          sendJSONResponse(res, 400, error);
        } else {
          blog.title = req.body.title;
          blog.body = req.body.body;
          blog.featured_photo = req.body.featured_photo;
          blog.summary = req.body.summary;
          blog.youtube_stats = req.body.youtube_stats;
          blog.is_published = req.body.is_published;
          //
          blog.save(function(error, blog) {
            if(error) {
              sendJSONResponse(res, 400, error);
            } else {
              sendJSONResponse(res, 200, blog);
            }
          });
        }
      });
  }
}
// Delete a blog
module.exports.deleteBlog = function(req, res) {
  var blogid = req.params.blogid;
  if(req.params && req.params.blogid) {
    blog
      .findByIdAndRemove(blogid)
      .exec(function(error, blog) {
        if(!blog) {
          sendJSONResponse(res, 404, {
            message: 'blog id not found'
          });
        } else if(error) {
          sendJSONResponse(res, 400, error);
        } else {
          sendJSONResponse(res, 204, null);
        }
      });
  } else {
    sendJSONResponse(res, 404, {
      message: 'No blogid request found'
    });
  }
}
// Get Blog Archive List
module.exports.getBlogsArchive = function(req, res) {
  blog
    .aggregate(
      [ 
        {
          $match: { is_published: true }
        },
        {
          $sort: { created_at: -1 }
        },
        {
          $group: {
          _id: { $year: "$created_at" },
          blogs: {
            $push: {
                _id: "$_id",  
                title: "$title",
                created_at: "$created_at",
              },
            },
          }, 
        }
      ]
    )
    .sort({ _id: -1})
    .exec(function(error, archives) {
      if(error) {
        sendJSONResponse(res, 400, error);
      } else {
        sendJSONResponse(res, 200, archives);
      }
  })
    
}
