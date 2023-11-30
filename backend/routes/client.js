const express = require ('express');

const router = express.Router(); 
const Client = ('../models/client'); 
const multer = require ('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Définissez le répertoire de destination pour les fichiers téléchargés
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    // Définissez le nom du fichier à enregistrer
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });


router.post('/ajout' , upload.any('image') ,(req,res)=>{

let data = req.body; 
let clt = new Client(data);
clt.image = filename ; 

clt.save()
   .then(
    (savedClt)=>{ 
        filename = ''; 
        res.status(200).send(savedClt)

    })

.catch(  
(err)=>{
    res.status(400).send(err)
}
)
})

router.get('/all' , (req,res)=>{

    Client.find()
    .then(
        (Clients)=>{
        res.status(200).send(Clients);

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

    Client.findById( {_id: id })
        .then(
           (clients)=>{
                res.status(200).send(clients);

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

    Client.findByIdAndDelete({ _id: id })
    .then(
        (clients)=>{

            res.status(200).send(clients); 
        }
    )

   .catch(
        (err)=>{
            res.status(400).send(err)
        }
   )



})


router.put('/update/:id' ,  upload.any('image'), (req,res)=>{
    let id = req.params.id; 
    let data = req.body ; 

    if (filename.length > 0 ){
    data.image = filename ; 

}


Client.findByIdAndDelete({ _id: id } , data )
.then(
    
    (client)=>{
        filename= ''; 

        res.status(200).send(client); 
    }
)
.catch(
    (err)=>{
        res.status(400).send(err)
    }
)


})





module.exports = router ; 