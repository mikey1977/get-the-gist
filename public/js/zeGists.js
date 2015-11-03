angular.module('zeGists', []);

var zeGists = angular.module('zeGists');

zeGists
.config(function() {

})
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {

  $rootScope.APP_VERSION = APP_VERSION;
}]);