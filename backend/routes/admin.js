const express = require ('express');
const jwt = require('jsonwebtoken');
const router = express.Router(); 
const bcrypt = require ('bcrypt');
const Admin = require('../models/admin');

router.post('/register' , (req,res)=>{

    data = req.body;
    const adm = new Admin(data);

    // Cryptage du mot de passe
    salt = bcrypt.genSaltSync(10);
    adm.password = bcrypt.hashSync(data.password, salt);

    adm.save()
        .then(savedAdmin => {
             res.status(200).send(savedAdmin);
        })
        .catch(error => {
            res.status(400).send(error);
        })

    })
   
router.post('/login' , (req,res)=>{

  data = req.body;

  Admin.findOne({ email: data.email})

       .then(
         (admin)=>{
            valide = bcrypt.compareSync (data.password , admin.password); 

            if(!valide){
                res.status(401).send('email or password invalid'); 
            }
            
            else {
                let payload = {
                    _id: admin._id,
                    email: admin.email,
                    name: admin.name 
                }

                let token = jwt.sign(payload, '123456789') ;

                res.status(200).send({ myToken: token }); 

                }
            }
        
       )
       .catch(
        (err)=>{
            res.status(400).send(err)
        } 
       )
    } )

router.post('/update/id' , (req,res)=>{

    let id = req.params;
    let data = req.body; 

    Admin.findByIdAndUpdate( { _id:id } , data )
    .then(
        (updated)=>{
            res.status(200).send(updated);

        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
    
})

module.exports = router ; 