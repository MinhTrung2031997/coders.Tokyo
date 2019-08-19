const express = require('express');
let router = express.Router();
const controller = require('../controller/use.controller');
const validate = require('../validate/user.validate');

router.get('/',controller.index );

router.get('/cookie', (req,res,next) => {
   res.cookie('user-id', 12345);
   res.send('hello');
});

router.get('/create', controller.create);

router.post('/create',validate.postCreate, controller.postCreate);

router.get('/search', controller.search);

router.get('/:id',controller.getId);


module.exports=router;