var mongoose = require('mongoose');
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/cursos';

mongoose.connect(uristring);


exports.mongoose = mongoose;