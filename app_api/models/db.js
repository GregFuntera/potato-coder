var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/PotatoCoder';

if(process.env.NODE_ENV === 'production') {
  dbURI ='mongodb://heroku_r12z9m07:c207v6nhqehsa46vkjin26d53a@ds113870.mlab.com:13870/heroku_r12z9m07';
}

mongoose.connect(dbURI);

var gracefullShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through the ' + msg);
    callback();
  });
};

mongoose.connection.on('connected',
  function() {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',
  function(error) {
  console.log('Mongoose connection error ' + error);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

process.once('SIGUSR2', function() {
  gracefullShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', function() {
  gracefullShutdown('app termination', function() {
    process.exit(0);
  });
});

process.on('SIGTERM', function() {
  gracefullShutdown('Heroku app shutdown', function() {
    process.exit(0);
  });
});

require('./blog');
