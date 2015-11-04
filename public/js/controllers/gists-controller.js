var zeGists = angular.module('zeGists');
zeGists.controller('gistController', [ '$scope', function($scope) {
  $scope.myModel = 'zeGist List';
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
