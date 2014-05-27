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
    r1: pointsFactory.currentState.user.greenmark.recycle,
    r2: pointsFactory.currentState.user.greenmark.reduce,
    r3: pointsFactory.currentState.user.greenmark.reutilize,
    color: "red",

  };
  var cityMark = {
    r1: 12,
    r2: 14,
    r3: 10,
    color: "blue",
  };
  var comunityMark = {
    r1: pointsFactory.currentState.community.greenmark.recycle,
    r2: pointsFactory.currentState.community.greenmark.reduce,
    r3: pointsFactory.currentState.community.greenmark.reutilize,
    color:"yellow",
  };

  window.initMark(svg1,personalMark);
  window.initMark(svg2,comunityMark);
  // window.initMark(svg3,cityMark);


});