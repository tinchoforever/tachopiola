var greenUserService = require("../services/greenUser");

exports.all = function(request,response){
    greenUserService.all(function(data){
        console.log(data);
        response.json(data);
        response.end();
    });
};


exports.add = function(request,response){
  var newUser = request.body;

  greenUserService.add(newUser, function(data){
    if (!data.success){
      response.status(500);
    }
    response.json(data);
      response.end();
  });

};
exports.push = function(request,response){
  var insight = request.body;
  console.log(insight);
    greenUserService.push(insight, function(data){
      if (!data.success){
        response.status(500);
      }
      response.json(data);
        response.end();
    });

};