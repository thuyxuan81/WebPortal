const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post(
  '/', 
  [
    check('id', 'ID is required')
      .not()
      .isEmpty(),
    check('firstName', 'First name is required')
      .not()
      .isEmpty(),
    check('lastName', 'Last name is required')
      .not()
      .isEmpty(),
    check('email', 'Please enter valid email address')
      .isEmail(),
    check('password', 'Please enter a password with 8 or more characters')
      .isLength({ min: 8}),
    check('role', 'Role is required')
      .not()
      .isEmpty()
  ],
  (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }
    res.send('User Route');
});

module.exports = router;