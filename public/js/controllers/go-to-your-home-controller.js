angular.module('zeGists')
.controller('homeController', [
  '$scope',
  '$location',
  function($scope, $location) {
    $scope.routeHome = function(route) {
      $location.path(route);
    };
}]);