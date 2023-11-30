//1
const mongoose = require ('mongoose'); 

//2

mongoose.connect( 'mongodb://127.0.0.1:27017/bd_grh' )
        .then (
              ()=>{
                 console.log('connected');

             }
        )
        .catch(
              ()=>{
                  console.log('not connected !!'); 
            }
)

//3 exporter 
module.exports = mongoose; 

