var moment = require('moment');
var request = require('request');

var apiOptions = {
  server: 'http://localhost:3000/'
};

if(process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://potatocoder.herokuapp.com/';
}

module.exports.blogList = function(req, res) {
  var requestOptions, path;
  path = 'api/blog';
  
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
  };

  request(requestOptions, function(err, response, body) {
    renderBlogList(req, res, body);
  });

}


var renderBlogList = function(req, res, responseBody, archives) {
  var message;
  
  message = createBlogListMessage(responseBody).message;
  responseBody = createBlogListMessage(responseBody).response;
  
  var data = {
    view: 'blog-list',
    response: {
      topics: responseBody,
      message: message,
    }
  }
  getBlogArchives(req, res, data);
};


var createBlogListMessage = function(responseBody) {
  var message, response = responseBody;
  if(!Array.isArray(responseBody)) {
    message = 'API lookup error';
    response = [];
  } else {
    if(!responseBody.length) {
      message = 'No topics to be found'
    } 
  }
  return {message: message, response: response};
}




module.exports.blogView = function(req, res) {
  getBlogView(req, res, function(req, res, data) {
    renderBlogView(req, res, data);
  })
}

var getBlogView = function(req, res, callback) {
  var blogid = req.params.blogid;
  
  var requestOptions, path = 'api/blog/';
  requestOptions = {
    url: apiOptions.server + path + blogid,
    method: 'GET',
    json: {},
  }
  
  request(requestOptions, function(error, response, body) {
    if(response.statusCode === 200) {
      callback(req, res, body);
    } else {
      _showError(req, res, response.statusCode);
    }
  });
}

var renderBlogView = function(req, res, responseBody) {
  var data = {
    view: 'blog-view',
    response: {
      title: responseBody.title,
      body: responseBody.body,
      featured_photo: responseBody.featured_photo,
      created_at: moment(responseBody.created_at).format("MMM Do YY"),
    }
  };
  getBlogArchives(req, res, data);
}

var _showError = function(req, res, status) {
   var title, content; 
  if(status === 404) {
    title = status + ', page not found';
    content = `Oh dear, looks like we can't find this page.`;
  } else {
    title = status + ', something gone wrong';
    content = `Something somewhere, has gone a little bit wrong.`
  }

  res.status(status);

  res.render('blog-view-error', {
    title: title,
    content: content
  });
}

// Getting Archives 
var getBlogArchives = function(req, res, data) {
  var requestOptions, path;
  path = 'api/archives';
  
  requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
  };

  request(requestOptions, function(err, response, archives) {
    data.response.archives = archives;
    renderView(req, res, data);
  });
}

var renderView = function(req, res, data) {
  res.render(data.view, data.response);
}
