'use strict';
var express = require('express');
var request = require('request');
var router = express.Router();

//call from client to github API
router
  .route('/')

  //call from client to express server
    .get(getAuthBearerToken, function(req, res) {

      //get request from express to gitHub API
      request.get({
        url : 'https://api.github.com/gists',
        json : true,
        headers : {
          authorization : 'Bearer ' + req.access_token,
          'User-Agent' : 'Node'
        }
      }, function(err, response, body) {
        if(err) {
          return res.status(500).json(err);
        }
        res.json('hello', body);
      });
    })
    .post(getAuthBearerToken, function(req, res) {
      var data = {};

      var fileName = req.body.fileName;
      var type = req.body.filetype;
      var content = req.body.content;
      data[fileName + '.' + type] = {
        content : content
      };

      //post request from express to gitHub API
      request.post({
        url : 'https://api.github.com/gists',
        json : true,
        headers : {
          authorization : 'Bearer ' + req.access_token,
          'User-Agent' : 'Node'
        },
        body : {
          description : req.body.description,
          public : true,
          files : data
        }
      }, function(err, response, body) {
        if(err) {
          console.log(err);
          return res.status(500).json(err);
        }

        res.json(body);
      });
    });

router
  .route('/:id')
    .get(getAuthBearerToken, function(req, res) {

      //get request from express to gitHub API to receive single gist
      request.get({
        url : 'https://api.github.com/gists/' + req.params.id,
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
    })
    .put()
    .delete(getAuthBearerToken, function(req, res) {
      console.log('string', req.params.id);
      request.del({
        url : 'https://api.github.com/gists/' + req.params.id,
        json : true,
        headers : {
          Authorization : 'Bearer '+req.access_token,
          'User-Agent' : 'Node'
        }
      }, function(err, response, body) {
        if(err) {
          return res.status(500).json(err);
        }

        res.json(body);
      });
    });

//put request from express to gitHub to edit specific gists

//delete request from express to gitHub api to delete a specific gists

function getAuthBearerToken(req, res, next) {
  if(req.headers.hasOwnProperty('authorization') === false) {
    return res.status(401).json({ error : 401, message : 'Bearer auth token not found in headers.'}
    );
  }
  var auth_header = req.headers.authorization;
  // var auth_header_value = auth_header.split(' ');
  // if(auth_header_value.length !== 1 ) {
  //   return res.status(401).json(
  //     { error : 401, message : 'Authorization header is malformed.'}
  //   );
  // }

  req.access_token = req.headers.authorization;
  next();
}

module.exports = router;