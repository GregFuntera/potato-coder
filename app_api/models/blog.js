var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  featured_photo: { type: String },
  title: { type: String },
  body: { type: String },
  summary: { type: String },
  is_published: { type: Boolean, default: false }
});

mongoose.model('blog', blogSchema);
