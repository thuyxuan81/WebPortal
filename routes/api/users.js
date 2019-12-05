const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.send(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




const User = require('../../models/User');
router.post(
  '/', 
  [
    check('firstName', 'First name is required')
      .not()
      .isEmpty(),
    check('lastName', 'Last name is required')
      .not()
      .isEmpty(),
    check('email', 'Please enter valid email address')
      .isEmail(),
    check('password', 'Please enter a password with 8 or more characters')
      .isLength({ min: 8})
  ],

  
  async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }

    const {firstName, lastName, email, password} = req.body;

    try {

    let user = await User.findOne({email});

    if(user) {
     res.status(400).json({errors: [{ msg: 'User already exists' }]});
    }

    user = new User({
      firstName,
      lastName,
      email, 
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'), 
      {expiresIn : 3600000},
      (err, token) => {
        if(err) throw err;
        res.json({token});
      } );

    }catch(err){

     console.error(err.message);
     res.status(500).send('Server Error');

    }
  } 
);

module.exports = router;