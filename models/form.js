
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/datacontact");
//mongoose.connect("mongodb://pablo:123@ds133328.mlab.com:33328/smartketingdb");


var form_schema = new Schema({
	fname : String,
	sname: String,
	email: String,
	message : String
});

var Form = mongoose.model("Form", form_schema);

form_schema.pre('save', function (next) {
	
});

var Form = mongoose.model("Form", form_schema);

module.exports.Form = Form;