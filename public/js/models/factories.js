angular.module('zeGists')
.factory('httpRequestInterceptor', ['$localStorage', function($localStorage) {
  var httpRequestInterceptor = {
    request : function(config) {
      if(!$localStorage.isAnonymous) {
      config.headers['authentication'] = $localStorage.message;
      }

      return config;
    }
  };

  return httpRequestInterceptor;
}])
.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');
}]);