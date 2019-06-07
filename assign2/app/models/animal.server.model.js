var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 //schema for animal    
var AnimalSchema = new Schema({
 Name: String,
 Color: String,
 Size: String
});
//create mongoose models for schema
var Animal = mongoose.model('Animal', AnimalSchema);