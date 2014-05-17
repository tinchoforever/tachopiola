angular.module('tachoApp.controllers', []);
angular.module('tachoApp.factories', []);

angular.module('tachoApp', [
  'ngRoute',
  'tachoApp.controllers',
  'tachoApp.factories'])
  .config(['$routeProvider',
    function($routeProvider){
      $routeProvider
      .when('/',{
         templateUrl:'partials/hola.html',
         controller: 'MainController'
      }).when('/idle',{
         templateUrl:'partials/idle.html',
         controller: 'IdleController'
      }).when('/loader',{
         templateUrl:'partials/loader.html',
         controller: 'LoaderController'
      }).when('/thanks',{
         templateUrl:'partials/thanks.html',
         controller: 'ThanksController'
      });
}]);


