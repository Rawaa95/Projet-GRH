const express = require ('express');

const router = express.Router(); 

const Employee = require ('../models/employee'); 

const multer = require('multer');

filename = '';

const mystorage = multer.diskStorage({
    destination :'./uploads',
    filename:(req , file , redirect)=>{

      let date = Date.now();
      let fl = date + '.' + file.mimetype.split('/')[1]; 
      //03092023.png 
      //redirection vers le dossier upload 
      redirect(null, fl); 
      filename = fl; 

    }
  }
); 

//middleware

const upload = multer({ storage: mystorage}) ; 

router.post('/ajout' , upload.any('image'),  (req, res)=>{

let data = req.body; 
let emp = new Employee(data);
emp.image = filename ; 
emp.save()
   .then(
    (savedEmp)=>{ 
        filename = ''; 
        res.status(200).send(savedEmp)

    })

.catch(  
(err)=>{
    res.status(400).send(err)
}
)
})

router.get('/all' , (req, res)=>{

    Employee.aggregate(

        [
            {
                $lookup : {

                    from:'departements' ,
                    localField: 'idDep',
                    foreignField: '_id',
                    as: 'departement'

                }
            }


            ,
            {
                $limit: 3 
            }
            ,

            {
                $scip: 3 
            }
        ]

    )

    .then(
        (Emp)=>{
        res.status(200).send(Emp);

    }
   )
   .catch(
        (err)=>{
            res.status(400).send(err)
        }
   )
})

router.get('/getbyid' , (req, res)=>{

    
    let id = req.params.id;

    Departement.findById( {_id: id })
        .then(
           (Emp)=>{
                res.status(200).send(Emp);

    }
   )
       .catch(
           (err)=>{
               res.status(400).send(err)
        }
   )



})



router.delete('/delete/id' , (req, res)=>{


    let id = req.params.id 

    Employee.findByIdAndDelete({ _id: id })
    .then(
        (Emp)=>{

            res.status(200).send(dep); 
        }
    )
   .catch(
        (err)=>{
            res.status(400).send(err)
        }
   )


})

router.put('/update/:id' , upload.any('image'), (req, res)=>{

let id = req.params.id; 
let data = req.body ; 
if (filename.length > 0 ){
    data.image = filename ; 

}


Employee.findByIdAndDelete({ _id: id } , data )
.then(
    (emp)=>{

        res.status(200).send(emp); 
    }
)
.catch(
    (err)=>{
        res.status(400).send(err)
    }
)

})

router.get('/stat' , (req, res)=>{

    Employee.find()
    .count
         .then(
            (nbr)=>{
                res.send({ nomber: nbr });
            }
         )
         .catch(
            (err)=>{
                res.send(err)
            }
         )
})

module.exports = router ; 