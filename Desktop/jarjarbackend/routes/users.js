var express = require('express');
const { User } = require('../models/user');
var router = express.Router();
var bcrypt = require('bcrypt');
var auth = require('../services/auth');

router.post('/', async (req, res, next) => {
  if (!req.bodyy.username || !req.body.password) {
    res.status(400).send('Username and paw required');
    return;
  }

// hash the password

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(req.body.password, salt);


  User.create({
    email: req.body.email,
    password: hashedPassword
  }).then(newUser => {
    res.json({
      id: newUser.id,
      email: newUser.email
    }); 
  }).catch(() => {
    res.status(400).send();
  });
});

router.post('/login', async (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email,
      // saber: req.body.saber // checking if user has lightsaber
    }
  }).then(user => { // check if user exists
if (!user){
  res.status(404).send('Invalid username');
  return;
    }
    //check password
    const valid = bcrypt.compare(req.body.password, user.password);

    if (valid){
      const jwt = auth.createJWT(user);
      res.status(200).send({ jwt });
      // res.sendFile(user.saber)  // add lightsaber attachment if user has lightsaber
    } else {
      res.status(401).send('Invalid Password');
    }
  });
});

module.exports = router;
