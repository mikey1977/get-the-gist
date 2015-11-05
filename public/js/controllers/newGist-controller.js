var zeGists = angular.module('zeGists')
.controller('newGistController', ['$scope', 'httpRequest', function($scope, httpRequest) {
  $scope.create = function(newGist) {
    console.log('new Gist', newGist);
    httpRequest.newGists(newGist)
    .success(function(newGist) {
      console.log('callback', newGist);
    });
  };
}]);