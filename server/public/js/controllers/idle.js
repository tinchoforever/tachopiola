angular.module('tachoApp.controllers')
  .controller('IdleController', function($scope, $location, trashService, pointsFactory) {



  trashService.subscribe(function(e,d){
    $scope.$apply(function(){
          trashService.clearCallbacks();
          $location.path('/loader');
    });
  });


});