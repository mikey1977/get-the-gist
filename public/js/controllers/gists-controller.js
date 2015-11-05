var zeGists = angular.module('zeGists');
zeGists.controller('gistController', [
  '$scope',
  '$http',
  '$location',
  'httpRequest',
  function($scope, $http, $location, httpRequest){

    $scope.customNavigate = function(id) {
      $location.path('/gists/' + id);
    };

    $scope.go = function( route ) {
      $location.path( route );
    };

    $scope.gists = [];
    //gitGists method from services.js referring to 'httpRequest' service
    httpRequest.gitGists()
    .success(function(gists){
      $scope.gists = gists;
      console.log(gists);
    });

    $scope.deleteGist = function(id) {
      console.log('!!!!!!',id);
      httpRequest.deleteGists(id)
      .success(function(gists) {
        httpRequest.gitGists()
        .success(function(gists){
          $scope.gists = gists;
          console.log(gists);
        });
      });
    };
  }]);