angular.module('tachoApp.factories')
  .factory('trashService', function($http){
  console.log('trashService');
  var factory = {};

  factory.callback = function(){};


  var socket = new io.connect("http://localhost:3000");
  socket.on('new-bottle', function(msg){
    console.log('new-bottle', msg);
    factory.callback();
  });
  factory.subscribe = function(callback){
    factory.callback = callback;
  };
  return factory;
});