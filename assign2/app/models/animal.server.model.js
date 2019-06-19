var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 //schema for animal    
var AnimalSchema = new Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    dob: {
        type: Date
    }
});
//create mongoose models for schema
var Animal = mongoose.model('Animal', AnimalSchema);
module.exports = Animal;