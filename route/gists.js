'use strict';
var express = require('express');
var request = require('request');
var router = express.Router();

router
  .route('/')
    .post(getAuthBearerToken, function(req, res) {
      request.post({
        url : 'https://api.github.com/gists',
        json : true,
        headers : {
          Authorization : 'Bearer '+req.access_token,
          'User-Agent' : 'Node'
        },
        body : {
          description : req.body.description,
          public : true,
          files : JSON.parse(req.body.files)
        }
      }, function(err, response, body) {
        if(err) {
          return res.status(500).json(err);
        }

        res.json(body);
      });
    });

router
  .route('/gists/:id')
    .get(getAuthBearerToken, function(req, res) {
      request.get({
        url : 'https://api.github.com/gists',
        json : true,
        headers : {
          Authorization : 'Bearer '+req.access_token,
          'User-Agent' : 'Node'
        }
      }, function(err, response, body) {
        if(err) {
          return res.status(500).json(err);
        }

        res.json(JSON.parse(body));
      });
    });

function getAuthBearerToken(req, res, next) {
  if(!req.headers.hasOwnProperty('authorization')) {
    return res.status(401).json({ error : 401, message : 'Bearer auth token not found in headers.'}
    );
  }
  var auth_header = req.headers.authorization;
  var auth_header_value = auth_header.split(' ');
  if(auth_header_value.length !== 2 ) {
    return res.status(401).json(
      { error : 401, message : 'Authorization header is malformed.'}
    );
  }

  req.access_token = auth_header_value[1];
  next();
}

module.exports = router;