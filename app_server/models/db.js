var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/potato-coder';

mongoose.connect(dbURI);

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
