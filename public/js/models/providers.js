// //creating model to make call to GITHUB API, and getting gist object data from callback
// angular.module('zeGists')
// .provider('GistsAPI', function($http) {
//   var gists = {};

// //making call to Github?
//   gists.getGists = function() {

//     //getting gists back through callback with http request?
//     return $http({
//       method : "GET",
//       url : "http://localhost:3000/auth/github/callback"
//     });
//   };

//   return gists;
// });


angular.module('zeGists')
  .provider('Gists', function() {

//different than factories and services, in that it is configurable
    var self = this;
    this.endpoint = '';
    this.setEndpoint = function(endpoint) {
      self.endpoint = endpoint;
    };
    this.$get = ['$http', function($http) {
      return {
        getGists : function() {
          // use ajax to return promise
          return $http.get(self.endpoint); //go to controllers
        }
      };
    }];
  });