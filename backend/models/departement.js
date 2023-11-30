const mongoose = require('mongoose');

const Departement = mongoose.model('Departement' , {

    name: String,
    description:String,
    etage:String,
    salle: String,

})

module.exports = Departement;