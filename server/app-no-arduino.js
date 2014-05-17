
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var greenUsersAPI = require('./routes/greenUsers');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/api/v1/users', greenUsersAPI.add);
app.post('/api/v1/users/push', greenUsersAPI.push);
app.get('/api/v1/users/all', greenUsersAPI.all);



var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
if (process.env.NODE_ENV ==='production'){
  //For Heroku
  io.configure(function () {
      io.set("transports", ["xhr-polling"]);
      io.set("polling duration", 10);
      io.set("log level", 1);
  });
}

var mainSocket = {};
io.sockets.on('connection', function(socket) {
  mainSocket = socket;
  // mainSocket.emit("new-bottle", {});
});

//mainSocket.emit("new-bottle", {});
