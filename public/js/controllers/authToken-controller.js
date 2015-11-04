angular.module('zeGists')
.controller('auth_tokenController', [
  '$scope',
  '$localStorage',
  '$routeParams',
  function($scope, $localStorage, $routeParams) {
  $localStorage.message = $routeParams.id;

}]);