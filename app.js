// Import libraries for Firebase
// const functions = require('firebase-functions');
// const express = require('express');
// const engines = require('consolidate');
// var hbs = require('handlebars');
// const admin = require('firebase-admin');

// Authorize application to access Firestore DB
// var serviceAccount = require("./albugierke-products-firebase-adminsdk-z42io-4224d17788.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://albugierke-products.firebaseio.com"
// });
// admin.initializeApp(functions.config().firebase);

// Import supporting modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dlogRouter = require('./routes/dlog-route');
// var mapRouter = require('./routes/map-route');

// Create app object from express module
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dlog', dlogRouter);
// app.use('/maps', mapRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// This will make express convert json data
app.use(express.json());

// Create a middleware to handle all the CORS issues
app.use((req, res, next) => {
    res.setHeader("Access-Control-Access-Header","*");
    next();
});

// Create another middleware
app.use('./public/images/uploads', express.static('uploads'));

module.exports = app;
