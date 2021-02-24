var express = require('express');
var router = express.Router();
require('dotenv').config();
const fetch = require("node-fetch");

// API_KEY for maps api
let API_KEY = process.env.WEATHER_API_KEY;

// Create Post object
const Post = require("../models/dlog-posts");

// Import multer
var multer = require('multer');
// Define storage using multer module
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define path to store to
        cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
        // Define file storage naming format
        cb(null, `${file.fieldname}-${Date.now()}.jpg`)
    }
})

// Define getExt function for controlling extension type
const getExt = (mimeType) => {
  // Make a switch function
  switch(mimeType) {
      case "image/png":
          return ".png";
         case "image/jpeg":
          return ".jpeg";
  }
}

// Define upload variable with multer storage functionality
var upload = multer({ storage: storage });
// Create postsData Post object
const postsData = new Post();

/* Define route for Dlog page. */
router.get('/', function(req, res, next) {
    res.render('dlog', { title: 'Dlog' });
});

/* Define API GET endpoint for getting all posts. */
router.get('/api/posts/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(postsData.get());
});

// Create a new API endpoint to get individual post
router.get("/api/posts/:post_id", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Get the post ID we want to view
    const postId = req.params.post_id;
    // Get that individual post from posts
    const foundPost = postsData.getIndividualBlog(postId);
    // Check that it returned something
    if(foundPost) {
        res.status(200).send(foundPost);
    } else {
        // Send 404 not found error if not
        res.status(404).send("Not Found");
    }
})

// Define API endpoint for uploading a new post
router.post("/api/posts", upload.single("post-image"), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Define newPost with relevant attributes
    const newPost = {
        // ID and added_date are generated, not supplied
        "id": `${Date.now()}`,
        "author": req.body.author,
        "title": req.body.title,
        "content": req.body.content,
        "post_image": `/images/uploads/${req.file.filename}`,
        "added_date": `${Date.now()}`
    }
    // Add newPost to postsData
    postsData.add(newPost);
    res.status(201).send(newPost);
})

// Create an endpoint for getting weather data, this allows masking key
router.get("/api/weather/:city", (req, res) => {
    
    // Get urlPath 
    urlParts = req.path.split('/');
    // Get city from path
    city = urlParts[urlParts.length -1];
    
    //   Define base url
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    // Define full url
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    // Create constant weatherPromise
    const weatherPromise = fetch(FULL_URL);
    // Handle returned promise
    weatherPromise.then((response) => response.json())
        .then(data => res.status(201).send(data));
})

module.exports = router;

