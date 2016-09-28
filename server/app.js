var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
//above module for favicon loading across your app
var logger = require('morgan');
//above module is a fine logger, not console.log but request logger which will log each request made to server with details like
//when and from where the request was made, very good for development and testing
var cookieParser = require('cookie-parser');
//cookie handler initially shipped with expressj but now as a separate module, to handler cookies and stuff
var bodyParser = require('body-parser');
//above module is a body parser, which is body of request made to server, usually for POST, PUT, DELETE etc, wherever we send some
// encrypted data to our app via some route/api we define

var routes = require('./routes/index');
//here we are importing routes index/main/entry file we defined in routes/ folder
var users = require('./routes/users');
//here we are importing another users file we defined in routes/ folder, for some users api but we'll remove it soon

var app = express();
//this instance will be used throught app and will be responsible for adding core and everything from express to our app
//this instannce will be exported from this app.js to other files as well


var mongoose = require("mongoose");


mongoose.Promise = global.Promise;
//connect to database
mongoose.connect('mongodb://127.0.0.1:27017/demo');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


//hi, i'm file server, and i will invoked before every routing module no matter what :D
app.use(express.static(path.join(__dirname, '../app')));

//i'm also route handler but sorry this time fileserver will be the first one to check if any requested resource exits in 
// its frontedn directory
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
//exporting instance so we can