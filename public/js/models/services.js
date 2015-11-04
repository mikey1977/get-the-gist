var zeGists = angular.module('zeGists');

zeGists.service('httpRequest', ['$http', function($http) {
  this.gitGists = function() {
    return $http.get('http://localhost:3000/jmkijhnijm');
  };

}]);