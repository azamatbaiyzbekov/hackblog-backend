const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//NOTE  Endpoint 'api/v1/users


//Get user profile
router.get('/:_id', ctrl.users.show);
router.get('/', ctrl.users.index);
router.put('/:_id', ctrl.users.update);


module.exports = router;