var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
 //schema for animal    
var AnimalSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    color: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true
    },
    dob: {
        type: Date,
        default: Date.now
    }
});
//create mongoose models for schema
var Animal = mongoose.model('Animal', AnimalSchema);