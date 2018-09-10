var mongoose = require('mongoose');

var youtubeStatsSchema = new mongoose.Schema({
   /**
   * TODO
   * 1. Find a way to retrieve in real-time view, comment, likes .. in youtube api
   */
  youtube_id: { type: String },
  comment_count: { type: Number, default: 0 },
  dislike_count: { type: Number, default: 0},
  favorite_count: { type: Number, default: 0},
  like_count: { type: Number, default: 0},
  view_count: { type: Number, default: 0},
});

var blogSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  featured_photo: { type: String },
  title: { type: String },
  body: { type: String },
  summary: { type: String },
  is_published: { type: Boolean, default: false },
  youtube_stats: youtubeStatsSchema,
});

mongoose.model('blog', blogSchema);
