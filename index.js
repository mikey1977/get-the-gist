'use strict';
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var auth = require('/public/route/auth');
var OAuth2 = require('oauth').OAuth2;
var oauth = new OAuth2(
  process.env.GITHUB_CLIENT_ID,
  process.env.GITHUB_CLIENT_SECRET,
  'https://github.com/',
  'login/oauth/authorize',
  'login/oauth/access_token',
  null
  );

//make public directory 'static'/default folder
app.use(express.static('./public'));

//parse json encoded callback through middleware
app.use(bodyParser.urlencoded({ extended : true }));

//route to the auth router '/public/route/auth'
app.use('/auth', auth);

app.listen(PORT, function() {
  console.log('# Butt');
});

