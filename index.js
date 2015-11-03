'use strict';
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var auth = require('./route/auth');
var gists = require('./route/gists');
// var OAuth2 = require('oauth').OAuth2;
// var oauth2 = new OAuth2(
//   process.env.GITHUB_CLIENT_ID,
//   process.env.GITHUB_CLIENT_SECRET,
//   'https://github.com/',
//   'login/oauth/authorize',
//   'login/oauth/access_token',
//   null
//   );

//make public directory 'static'/default folder
app.use(express.static('./public'));

//parse json encoded callback through middleware
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', function(req, res) {
  console.log(req);
  res.json({ status : 200 });
});


//route to the auth router '/public/route/auth'
app.use('/auth', auth);

// route to the gists router '/public/route/gists'
app.use('/gists', gists);

app.listen(PORT, function() {
  console.log('# Butt');
});

