const mongoose = require('mongoose');

const Client = mongoose.model('Client' , {

    name: String,
    description:String,
    entreprise:String,
    titreprojet: String,
    image: String

})

module.exports = Client;