var moment = require('moment');

module.exports.blogList = function(req, res) {
  res.render('blog-list', {
    topics: [
      {
        title: 'Sample Title 1',
        body: `Looking for wifi and a seat? Loc8r helps you find places
              to work when out and about. Perhaps with coffee, cake or a pint?
              Let Loc8r help you find the place you're looking for`,
        featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
      },
      {
        title: 'Sample Title 2',
        body: `Looking for wifi and a seat? Loc8r helps you find places
              to work when out and about. Perhaps with coffee, cake or a pint?
              Let Loc8r help you find the place you're looking for`,
        featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
      },
      {
        title: 'Sample Title 3',
        body: `Looking for wifi and a seat? Loc8r helps you find places
              to work when out and about. Perhaps with coffee, cake or a pint?
              Let Loc8r help you find the place you're looking for`,
        featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
      },
    ]
  });
}

module.exports.blogView = function(req, res) {
  let timestamp = new Date().getTime();
  res.render('blog-view', {
    title: 'Sample Title 3',
    body: `Looking for wifi and a seat? Loc8r helps you find places
          to work when out and about. Perhaps with coffee, cake or a pint?
          Let Loc8r help you find the place you're looking for`,
    featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
    created_at: moment(timestamp).format("MMM Do YY"),
  });
}
