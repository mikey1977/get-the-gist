'use strict';
var express = require('express');
var router = express.Router();

// Grab githubs auth url
router
  .route('/login')
    .get(function(req, res) {
      var authURL = oauth2.getAuthorizeUrl({
        redirect_uri : 'http://localhost:3000/auth/github/callback',
        scope : ['gist'],
        state : 'Authorize'+Math.round(Math.random()*9999999)
      });
      res.json({ url : authURL });
    });

// Callback from GitHub on successful authorization
// this route must be sent back to the provider as it is within the callback
//use code to gain access token from provider
router
  .route('/github/callback')
    .get(function(req, res) {

      //parse out the code value and assign it to a variable
      var code = req.query.code;

      if(code === undefined) {
        return res.status(401).json({
          error : 401,
          message : 'Invalid auth code'
        });
      }
      oauth2.getOAuthAccessToken(
        code,
        {
          redirect_uri : 'http://localhost:3000/auth/github/callback'
        },
        function(err, access_token, refresh_token, results) {
          if(err) {
            console.log('callback errror', err);
            res.status(401).json(err);
          } else if( results.error ) {
            console.error( results.error );
            res.status(401).json( results.error );
          } else {
            res.json({ access_token : access_token});
          }
        }
      );
    });
module.exports = router;