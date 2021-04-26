var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cors = require('cors');

var search = require("./routes/search");
var current = require("./routes/current_play");
var popular = require("./routes/popular");
var top_rated = require("./routes/toprate");
var trending = require("./routes/trending");
var video_and_info = require("./routes/video_and_info");
var cast = require("./routes/cast");
var cast_detail = require("./routes/cast_detail");
var review = require("./routes/review");
var recommended = require("./routes/recommend_movie");
var similar = require("./routes/similar_movie");

var app = express();

const corsOptions = {
  "origin": "*"
};

let variable = "/apis";

app.use(cors(corsOptions));
app.use(variable + "/search", search);
app.use(variable + "/current", current);
app.use(variable + "/popular", popular);
app.use(variable + "/toprate", top_rated);
app.use(variable + "/trending", trending);
app.use(variable + "/video_and_info", video_and_info);
app.use(variable + "/cast", cast);
app.use(variable + "/cast_detail", cast_detail);
app.use(variable + "/review", review);
app.use(variable + "/recommended", recommended);
app.use(variable + "/similar", similar);

app.use(express.static(path.join(__dirname, 'dist/hw8-final')));

app.use('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/hw8-final/index.html')); 
})

app.listen(2000, function () {
  console.log("Express API is running at port 2000");
})

module.exports = app;
