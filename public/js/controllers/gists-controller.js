var zeGists = angular.module('zeGists');
zeGists.controller('gistController', [
  '$scope',
  '$http',
  '$location',
  'httpRequest',
  function($scope, $http, $location, httpRequest){

    $scope.customNavigate = function(id) {
      $location.path('/gists/'+ id);
    };

    $scope.gists = [];
    //gitGists method from services.js referring to 'httpRequest' service
    httpRequest.gitGists()
    .success(function(gists){
      $scope.gists = gists;
      console.log(gists);
    });
}]);

// //using controller to communicate with provider to bind data to views/html through scope
// angular.module('zeGists')
// .controller('GistsController', ['$scope', 'Gists', function($scope, Gists) {
//   $scope.firstName = 'POUND BUTT';
//   $scope.gists = [];

//   //adding objects from providers model to gists array
//   //gists array will be pushed to view
//   Gists.getGists().success(function(gists) {
//     $scope.gists = gists;
//   });
// }]);
