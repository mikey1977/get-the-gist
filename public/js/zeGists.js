angular.module('zeGists', ['ngRoute', 'ngStorage']);

var zeGists = angular.module('zeGists');

zeGists
.config(function($routeProvider) {

  //enable logic to check if current user has auth-token stored in local storage

  //route architicture for zeGists
  $routeProvider
  .when('/', {
    templateUrl : 'views/login.html',
    // controller :
  })
  //user directed to login page when no token in local storage
  .when('/auth/login', {
    templateUrl : 'views/login.html',
    controller : 'loginController'
  })

  //google search route params for Angular
  //retrieve final token allowing permission to make changes on user's behalf
  .when('/auth/auth_token/:id', {
    templateUrl : 'views/gists.html',
    controller : 'auth_tokenController'
  })

  //user directed to gists page when token in local storage
  .when('/gists', {
    templateUrl : 'views/gists.html',
    controller : 'gistController'
  })

  //user directed to gists:id when selecting specific gists to work on
  .when('/gists/:id', {
    templateUrl : 'views/gists-id.html'
    // controller :
  })

  .when('/new', {
    templateUrl : 'views/new-gist.html'
    //controllernew
  })

  //when user breaks things
  .otherwise({
    templateUrl : 'views/404.html'
    // controller :
  });
})
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {

  $rootScope.APP_VERSION = APP_VERSION;
}]);