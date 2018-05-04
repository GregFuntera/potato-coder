var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  featured_photo: String,
  title: String,
  body: String
});

mongoose.model('Blog', blogSchema);
