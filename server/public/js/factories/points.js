angular.module('tachoApp.factories')
  .factory('pointsFactory', function($http){
  var factory = {};
  factory.getAll = function(callback){
    $http.get('/api/v1/cities/all').success(callback);
  };

  factory.add = function(city,callback,onError){
    $http.post('/api/v1/cities',city)
      .success(callback)
      .error(onError);
  };
});
