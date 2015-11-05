var zeGists = angular.module('zeGists');

zeGists.service('httpRequest', ['$http', function($http) {

  //return data read from http://localhost:3000/gists on express
  this.gitGists = function() {
    console.log('gitGists');
    return $http.get('http://localhost:3000/gists');
  };

  //post new gist data, send to express at http://localhost:3000/gists
  this.newGists = function(newGist) {
    console.log('newGists', newGist);
    return $http.post('http://localhost:3000/gists', newGist);
  };
}]);