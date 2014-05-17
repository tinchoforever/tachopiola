angular.module('tachoApp.controllers')
  .controller('ThanksController', function($scope, $timeout, $location, pointsFactory) {

    // $scope.counter = 15;
    $scope.status = pointsFactory.currentState;
    // $scope.onTimeout = function(){

    //   if ($scope.counter-1 < 0){
    //     //Save points and freeze screen...
    //     $location.path('/idle');
    //   }
    //   else {
    //     $scope.counter--;
    //     mytimeout = $timeout($scope.onTimeout,1000);
    //   }
    // }
    // var mytimeout = $timeout($scope.onTimeout,1000);

    var width = 300,
    height = 300;


  var svg1 = d3.select(".marca-user").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var svg2= d3.select(".marca-comuna").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


  var svg3 = d3.select(".marca-ciudad").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


  var personalMark = {
    r1: 33,
    r2: 22,
    r3: 11,
  };
  var cityMark = {
    r1: 12,
    r2: 14,
    r3: 10,
  };
  var comunityMark = {
    r1: 11,
    r2: 10,
    r3: 2,
  };

  window.initMark(svg1,personalMark);
  window.initMark(svg2,comunityMark);
  // window.initMark(svg3,cityMark);


});