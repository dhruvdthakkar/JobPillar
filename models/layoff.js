var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Schema
var Layofff = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    Company: {
        type: String
    },
    Sectors: {
        type: String
    },
    Location: {
        type: String
    },
    Zipcode: {
        type: Number
    },
    No: {
        Number_Of_people:{
            type: String
        }
    },
    Date: {
        type: String
    },
    NameHR: {
        type: String
    },
    last_name_hr: {
        type: String
    },
    Contact: {
        type: Number
    },
    emails: {
        type: String
    }
});

var Layoff = mongoose.model('Layoff', Layofff);
module.exports = Layoff