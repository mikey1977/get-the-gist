//creating model to make call to GITHUB API, and getting gist object data from callback
angular.module('zeGists')
.provider('GistsAPI', function($http) {
  var gists = {};

//making call to Github?
  gists.getGists = function() {

    //getting gists back through callback with http request?
    return $http({
      method : "GET",
      url : "http://localhost:3000/auth/github/callback"
    });
  };

  return gists;
});