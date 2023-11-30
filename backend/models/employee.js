const mongoose = require('mongoose');

const objectId = require('mongodb').ObjectId;

const Employee = mongoose.model('Employee' , {

    name: String,
    lastname: String,
    tel: String,
    email:String,
    image:String,
    address: String,
    idDep: objectId

})

module.exports = Employee;