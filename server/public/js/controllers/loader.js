angular.module('tachoApp.controllers')
  .controller('LoaderController',
    function($scope, $location, $timeout, pointsFactory, trashService) {


    $scope.counter = 5;
    $scope.points = 15;
    $scope.bottles = 1;


    $scope.onTimeout = function(){

      if ($scope.counter-1 < 0){
        $scope.loading = true;
        //Donate Points and go to thanks.
        $scope.copy = "Guardando  " + $scope.points + " puntos a la escuela mas cercana.";
        pointsFactory.count("19991999", $scope.bottles, function(){
          trashService.clearCallbacks();
          $location.path('/thanks');
        });

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

    trashService.onId(function(user){
      $scope.$apply(function(){
          $scope.loading = true;
          $scope.pre = "Hola " + user.name ;
          $scope.copy = "Guardando " + $scope.points + " puntos en tu cuenta.";

          pointsFactory.count("19991999", $scope.bottles, function(){
            trashService.clearCallbacks();
            $location.path('/thanks');
          });

      });
    });


});