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

router.post('/', (req, res, next) => {
    Sabers.create({
        name: req.body.url,
        url: req.body.url
    }).then(newSaber =>{
        res.json(newSaber);
    }).catch(() => {
        res.status(500);
    });
});

router.put('/:id', (req, res, next) => {
    const sabersId = parseInt(req.params.id);

    if (!sabersId || sabersId<=0) {
        res.status(400).send('Invalid ID');
        return;
    }
    Sabers.update({
        name: req.body.name
    }, {
        where:{
            id: sabersId
        }
    }).then(() => {
        res.status(204).send()
    }).catch(() =>
    {
        res.status(400)
    })
});

router.put('/:id', (req, res, next) => {
    const sabersId = parseInt(req.params.id);

    if (!sabersId || sabersId<=0) {
        res.status(400).send('Invalid ID');
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
    });
});
 module.exports = router;
