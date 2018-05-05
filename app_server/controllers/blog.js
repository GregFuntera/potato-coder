var moment = require('moment');

module.exports.blogList = function(req, res) {
  res.render('blog-list', {
    topics: [
      {
        title: 'Sample Title 1',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
      },
      {
        title: 'Sample Title 2',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
      },
      {
        title: 'Sample Title 3',
        summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
      },
    ]
  });
}

module.exports.blogView = function(req, res) {
  let timestamp = new Date().getTime();
  res.render('blog-view', {
    title: 'Sample Title 3',
    body: `
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <h3>Why do we use it?</h3>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>`,
    featured_photo: 'http://www.lirent.net/wp-content/uploads/2014/10/Android-Lollipop-wallpapers-p-800x500.png',
    created_at: moment(timestamp).format("MMM Do YY"),
  });
}
