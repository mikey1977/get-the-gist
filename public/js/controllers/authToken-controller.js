// collect auth token from github and store it into localStorage
angular.module('zeGists')
.controller('auth_tokenController', [
  '$scope',
  '$localStorage',
  '$routeParams',
  '$window',
  function($scope, $localStorage, $routeParams, $window) {

  $localStorage.message = $routeParams.id;
  $window.location.href = '#/gists';
}]);