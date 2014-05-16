angular.module('tachoApp.controllers')
  .controller('LoaderController',
    function($scope, $location, $timeout, pointsFactory, trashService) {


    $scope.counter = 15;
    $scope.points = 15;
    $scope.bottles = 1;


    $scope.onTimeout = function(){

      if ($scope.counter-1 < 0){
        //Save points and freeze screen...
        $location.path('/thanks');
      }
      else {
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
      }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    trashService.subscribe(function(e,d){
      $scope.$apply(function(){
           $scope.bottles++;
           $scope.points = $scope.bottles * 15;
           $scope.counter = 15;

      });
    });


});