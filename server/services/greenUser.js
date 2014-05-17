var coreMongoose = require("../services/core-mongoose");

var mongoose = coreMongoose.mongoose;

exports.models = {};

//City Schema
var GreenUserSchema= mongoose.Schema({
    id:String,
    name: String,
    bottles: Number,
    paper: Number,
    aluminum: Number,
    recycle: Number,
    reduce: Number,
    reutilize: Number
})
var GreenUser = mongoose.model('GreenUser', GreenUserSchema);
exports.models.City = GreenUser;

exports.add = function(city, callback){
  var newUser = new GreenUser(city);
      newUser.save(function (err) {
            if (err) {
                callback({success:false});
            }
            else{
                callback({success:true});
            }
      });
}
exports.all = function(callback){
   var query = GreenUser.find().exec(function (err, docs){
        if (docs.length  > 0 ) {
              callback(docs);
        }
        else {

               callback([]);
        }
    });

}

exports.push = function(insight, callback){

  GreenUser.findOne({ id: insight.id }, function (err, doc){
    doc.bottles += insight.bottles;
    var grMonth = 192.47;
    //Disminutes tu generacion de residuos de plasticos
    doc.recycle = (doc.bottles * (0.53) * 100)/(grMonth/8);
    //Reduciste el reciclado de plasticos en un
    // doc.reduce = (doc.bottles * (0.53) * 100)/192,47
    doc.reduce = (doc.bottles * (0.53) * 100)/(grMonth/8);
    //Con lo que has reciclado en plastico podrias construir telas
    console.log((doc.bottles * (0.53))/83);
    doc.reutilize = (((doc.bottles * (0.53))/83) *100)/ 1;

    doc.save(function (err) {
            if (err) {
                callback({success:false});
            }
            else{
                callback({success:true, user: doc});
            }
      });
  });
}