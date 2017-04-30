
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/datacontact");

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