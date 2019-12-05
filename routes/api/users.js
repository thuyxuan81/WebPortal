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

router.put('/:id', async (req, res) => {
  const condition = { _id: req.params.id };
  console.log('REQ: ', condition);

  const { role } = req.body;
  console.log('Body: ', role);

  const user = await User.findById(req.params.id);
  console.log('User: ', user.role);

  if (role == user.role) {
      return res.status(400).json({
          errors: [{ msg: 'Cannot update role' }]
      });
  }
  if (user) {
      await User.findByIdAndUpdate(
          req.params.id,
          { role: role },
          (err, obj) => {
              if (err) {
                  return res.status(400).json({
                      errors: err
                  });
              }
              return res.json(obj);
          }
      );
  } else {
      return res.status(400).json({
          errors: [{ msg: 'User not found' }]
      });
  }
});

module.exports = router;