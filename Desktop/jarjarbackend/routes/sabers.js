require('dotenv').config();
var express = require('express');
var router = express.Router();
const { Sabers } = require('../models');
var auth = require('../services/auth');
const multer = require('multer');
const { Storage } =  require('@google-cloud/storage');

const uploader = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

const storage = new Storage({
    projectId: process.env.FIREBASE_PROJECT_ID,
    keyFilename: process.env.FIREBASE_KEY
});

const bucket = storage.bucket(process.env.FIREBASE_BUCKET);

router.get('/', function(req, res, next){
    Sabers.findAll().then(sabersList => {
        res.json(sabersList);
    });
});


router.get('/:id', (req, res, next) => {
    const sabersId = parseInt(req.params.id);

    Sabers.findOne({
        where: {
            id: sabersId
        }
        }).then(theSaber => {
            if (theSaber) {
                res.json(theSaber);
            } else{
                res.status(404).send();
            }
        }, err => {
            res.status(500).send(err);
        })
});

// post create saber
router.post('/', (req, res, next) => {
    // get token
    const header = req.headers.authorization;

    if (!header){
        res.status(403).send();
        return;
    }

   //create saber for specified email
   Sabers.create({
       name: req.body.name,
        url: req.body.url,
        UserId: user.id
    }).then(newSaber => {
            res.json(newSaber);
        }).catch(() => {
            res.status(400).send();
        });
   });

    // create the saber with authorization id

// CHANGE saber
router.put('/:id', (req, res, next) => {
    const sabersId = parseInt(req.params.id);

    if (!sabersId || sabersId<=0) {
        res.status(400).send('Invalid ID');
        return;
    }
    const user = req.user;

    if (!user) {
        res.status(403).send();
        return;
    }

    Sabers.update({
        name: req.body.name,
        url: req.body.url
    }, {
        where: {
            id: sabersId
        }
    }).then(() => {
        res.status(204).send();
    }).catch(() => {
        res.status(400).send();
    })
})
   

//DELETE SABER

router.delete('/:id', (req, res, next) => {
    if (!sabersId || sabersId <=0){
        res.status(400).send('invalid ID');
        return;
    }

    const user = req.user;

    if (!user) {
        res.status(403).send();
        return;
    }

    Sabers.destroy({
        where: {
            id: sabersId
        }
    }).then(() => {
        res.status(204).send();
    }).catch(() => {
        res.status(400).send();
    })
})

//UPLOAD NEW SABER
router.post(':id/sabers', uploader.single('image'), async (req, res, next) => {
    
    const sabersId = parseInt(req.params.id);

    if (!sabersId || sabersId<=0) {
        res.status(400).send('Invalid ID');
        return;
    }
    const user = req.user;

    if (!user) {
        res.status(403).send();
        return;
    }

    try{
            if(!req.file){
                res.status(400).send('File did not upload');
                return;
            }
            const blob = bucket.file(req.file.originalname);
            const blobStream = blob.createWriteStream({
                metadata:{
                    contentType: req.file.mimetype
                }
            });
            blobStream.on('error', (err) => {
                console.log(err);
                next(err);
            });
            blobStream.on('finish', () => {
                const encodedName = encodeURI(blob.name);
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedName}?alt=media`;
                
                console.log(publicUrl); 
            });
            blobStream.end(req.file.buffer);
        
    } catch(error){
        res.status(400).send(`Did not upload file: ${error}`)
    }
});

 module.exports = router;
