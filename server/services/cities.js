var coreMongoose = require("../services/core-mongoose");

var mongoose = coreMongoose.mongoose;

exports.models = {};

//City Schema
var CitySchema= mongoose.Schema({
    name:String,
    country: String
})
var City = mongoose.model('City', CitySchema);
exports.models.City = City;

exports.all = function(callback){
   var query = City.find().exec(function (err, docs){
        if (docs.length  > 0 ) {
              callback(docs);
        }
        else {

               callback([]);
        }
    });

}

exports.add = function(city, callback){
	var newCity = new City(city);
	    newCity.save(function (err) {
	          if (err) {
	              callback({success:false});
	          }
	          else{
	              callback({success:true});
	          }
	    });
}

exports.remove = function(id, callback){
  City.remove({ _id: id }, function (err) {
    if (err) {
      callback({success:false});
    }
    else{
      callback({success:true});
    }
  });          
}