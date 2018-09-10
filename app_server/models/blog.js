var mongoose = require('mongoose');

var youtubeStatsSchema = new mongoose.Schema({
  comment_count: Integer,
  dislike_count: Integer,
  favorite_count: Integer,
  like_count: Integer,
  view_count: Integer,
});

var blogSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  featured_photo: String,
  title: String,
  body: String,
  summary: String,
  youtube_stats: youtubeStatsSchema,
});

mongoose.model('blog', blogSchema);
