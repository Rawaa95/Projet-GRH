const express = require ('express');
const { append } = require ('express/lib/response');

const router = express.Router(); 

const Departement = require('../models/departement');

router.post('/ajout' , (req,res)=>{

    data = req.body;

    const dep = new Departement(data);

    dep.save()
       .then(
        (savedDep)=>{
            res.status(200).send(savedDep);

        }
       )
       .catch(
            (err)=>{
                res.status(400).send(err)
            }
       )
})

router.get('/all' , (req,res)=>{

    Departement.find()
        .then(
            (Dep)=>{
            res.status(200).send(Dep);

        }
       )
       .catch(
            (err)=>{
                res.status(400).send(err)
            }
       )
})

router.get('/getbyid/:id' , (req,res)=>{

    let id = req.params.id;

    Departement.findById( {_id: id })
        .then(
           (Dep)=>{
                res.status(200).send(Dep);

    }
   )
       .catch(
           (err)=>{
               res.status(400).send(err)
        }
   )


})

router.delete('/delete/:id' , (req,res)=>{

    let id = req.params.id 

    Departement.findByIdAndDelete({ _id: id })
    .then(
        (dep)=>{

            res.status(200).send(dep); 
        }
    )

   .catch(
        (err)=>{
            res.status(400).send(err)
        }
   )


})

router.put('/update' , (req,res)=>{

    let id = req.params.id ;
    let data = req.body; 

    Departement.findByIdAndDelete({ _id: id } , data )
    .then(
        (dep)=>{

            res.status(200).send(dep); 
        }
    )
   .catch(
        (err)=>{
            res.status(400).send(err)
        }
   )


})

module.exports = router ; 