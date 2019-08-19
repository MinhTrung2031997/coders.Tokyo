const express = require('express');
let router = express.Router();
const controller = require('../controller/use.controller');
const validate = require('../validate/user.validate');

router.get('/',controller.index );

router.get('/create', controller.create);

router.post('/create',validate.postCreate, controller.postCreate);

router.get('/search', controller.search);

router.get('/:id',controller.getId);


module.exports=router;