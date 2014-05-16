var cities = require("../services/cities");

exports.all = function(request,response){
    cities.all(function(data){
        console.log(data);
        response.json(data);
        response.end();
    });
};
exports.remove = function(request,response){
    var id = request.params.id;
    cities.remove(id, function(data){
        if (!data.success){
            response.status(500);
        }
        response.json(data);
        response.end();
    });
}
exports.add = function(request,response){
	var city = request.body;
	if (!city.name || !city.country){
		var data = {error:'Falta el nombre o el pais de la ciudad.'};
		response.status(500);
		response.json(data);
        response.end();

	}
    cities.add(city, function(data){
    	if (!data.success){
    		response.status(500);
    	}
    	response.json(data);
        response.end();
    });

};