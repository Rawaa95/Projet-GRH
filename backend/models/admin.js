const mongoose = require('mongoose');

const Admin = mongoose.model('Admin' , {

    name: String,
    email:String,
    password: String

})

module.exports = Admin;