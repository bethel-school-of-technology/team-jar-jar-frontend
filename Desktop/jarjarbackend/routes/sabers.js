var express = require('express');
var router = express.Router();
const { Sabers } = require('../models');
const sabers = require('../models/sabers');

router.get('/', function(req, res, next){
    Sabers.findAll().then(sabersList => {
        res.json(sabersList);
    })
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
router.post('/', async (req, res, next) => {
    const header = req.headers.authorization;

    if (!header){
        res.status(403).send();
        return;
    }
    const token =header.split(' ')[1]
    if (!user){
        res.status(403).send();
        return;
    }

    // create the saber with authorization id
    Sabers.create({
        name: req.body.name,
        // url: req.body.url, //if  lightsaber exists or is crated
        UserId: user.id
    }).then(newSaber =>{
        res.json(newSaber);
    }).catch(() => {
        res.status(400).send();
    });
});

// save saber
router.put('/:id', (req, res, next) => {
    const sabersId = parseInt(req.params.id);

    if (!sabersId || sabersId<=0) {
        res.status(400).send('Invalid ID');
        return;
    }
    const user = req.user;
    Sabers.update({
        name: req.body.name,
        url: req.body.url
    }, {
        where: {
            id: sabersId
        }
    })
    Sabers.destroy({
        where: {
            id: sabersId
        }
    }).then(() => {
        res.status(204).send();
    }).catch(() => {
        res.status(400).send();
    });
});
 module.exports = router;
