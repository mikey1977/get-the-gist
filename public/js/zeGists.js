angular.module('zeGists', []);

var zeGists = angular.module('zeGists', [ 'ngRoute']);

// zeGists
//   .config(function())
zeGists.config(function(GistsProvider, $routeProvider) {
  GistsProvider.setEndpoint('http://localhost:3000/api/gists');

  //setting routes
  $routeProvider
  .when('/gists', {
    templateUrl : 'views/gists.html'
  });
})

.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {

  $rootScope.APP_VERSION = APP_VERSION;
}]);