const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./config/connect');
 
const adminRoute = require('./routes/admin');
const departementRoute = require('./routes/departement');
const employeeRoute = require('./routes/employee');
const clientRoute = require('./routes/client');

const app = express();
app.use(express.json());
app.use(cors());

//http:127.0.0.1.3000/offreRoute/ajout


app.use('/admin' , adminRoute);
app.use('/departement', departementRoute);
app.use('/employee' , employeeRoute);
app.use('/client' , clientRoute); 

app.use('/getimage' , express.static('./uploads'));

app.listen(3000, () => {
    console.log('Le serveur fonctionne sur le port 3000');
});
