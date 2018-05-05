var mongoose = require('mongoose');

var blog = mongoose.model('blog');

var sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content)
}

module.exports.getBlog = function(req, res) {
  blog
    .find()
    .select('title')
    .exec(function(error, blog) {
      console.log(error, blog);
      sendJSONResponse(res, 200, blog);
    });
}
