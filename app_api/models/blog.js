var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  featured_photo: { type: String, required: true},
  title: { type: String, required: true },
  body: { type: String, required: true },
  summary: { type: String, required: true },
});

mongoose.model('blog', blogSchema);
