var zeGists = angular.module('zeGists');
zeGists.controller('myController', [ '$scope', 'mainCharacter', function($scope, mainCharacter) {
  $scope.myFirstName = 'Pound Butt';
  $scope.myModel = 'Anything you want to put there';
  $scope.mainCharacter = mainCharacter;
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
