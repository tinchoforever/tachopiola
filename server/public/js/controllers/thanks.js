angular.module('tachoApp.controllers')
  .controller('ThanksController', function($scope, $timeout, $location, pointsFactory) {

    $scope.counter = 15;
    $scope.status = pointsFactory.currentState;
    $scope.onTimeout = function(){

      if ($scope.counter-1 < 0){
        //Save points and freeze screen...
        $location.path('/idle');
      }
      else {
        $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
      }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
});