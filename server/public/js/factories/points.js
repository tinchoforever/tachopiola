angular.module('tachoApp.factories')
  .factory('pointsFactory', function($http){
  var factory = {};
  factory.currentState = {
    user: {
      insight: {
        type: " botellas",
        count : 3,
        to : " buso polar",
        count: 0.5,
      },
      lastMark : 30,
      points : 30,
      journey:{
        days: 10,
        remaing: 21,
        endDate : "06 Junio 2014"
      },
      position: 33,
      greenmark : {
        recycle : 50,
        reutilize: 30,
        reduce : 70
      }
    },
    community:{
      longName: "Comuna 16 - Villa Crespo",
      shortName: "Villa Crespo",
      position: 22,
      greenmark : {
        recycle : 10,
        reutilize: 20,
        reduce : 40
      }
    },
    city:{
      greenmark : {
        recycle : 33,
        reutilize: 33,
        reduce : 33
      }
    }

  };
  factory.donate = function(points,callback,onError){

    callback();
    //todo: update with system data.
    // $http.post('/api/v1/cities',city)
    //   .success(callback)
    //   .error(onError);
  };

  factory.count = function(userId, points,callback,onError){

    callback();
    //todo: update with system data.
    // $http.post('/api/v1/cities',city)
    //   .success(callback)
    //   .error(onError);
  };

  return factory;

});
