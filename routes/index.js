var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* Define route for capoeira page. */
router.get('/capoeira', function(req, res, next) {
  res.render('capoeira-page', { title: 'Capo VLog' });
});

/* Define route for products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

// Dlog
// -------------------------------------------------------

/* Define route for products page. */
router.get('/dlog', function(req, res, next) {
  res.render('dlog', { title: 'Dlog' });
});

/* Define route for products page. */
router.get('/dlog/individual-post', function(req, res, next) {
  // console.log('Going further to dlog');
  res.render('individual-post', { title: 'Dlog' });
});

/* Define route for products page. */
router.get('/dlog/new-post', function(req, res, next) {
  // console.log('Going further to dlog');
  res.render('new-post', { title: 'Dlog' });
});

// Apps
// -------------------------------------------------------

/* Define route for apps page. */
router.get('/apps', function(req, res, next) {
  res.render('apps', { title: 'Apps' });
});

/* Define route for beatbox app. */
router.get('/apps/beatbox', function(req, res, next) {
  res.render('beatbox', { title: 'Beatbox' });
});

/* Define route for weather app. */
router.get('/apps/weather', function(req, res, next) {
  res.render('weather-app', { title: 'Weather App' });
});

/* Define route for text editor. */
router.get('/apps/text-editor', function(req, res, next) {
  res.render('text-editor', { title: 'Text Editor' });
});

// Map
// -------------------------------------------------------

// /* Define route for apps page. */
// router.get('/apps/maps', function(req, res, next) {
//   res.render('watersheds', { title: 'Watersheds' });
// });


module.exports = router;
