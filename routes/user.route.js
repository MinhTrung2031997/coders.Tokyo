const express = require('express');
const router = express.Router();
const controller = require('../controller/use.controller');
const validate = require('../validate/user.validate');
const  middleware = require('../middleware/auth.middleware');


router.get('/', middleware.authLogin ,controller.index );

router.get('/cookie', (req,res,next) => {
   res.cookie('user', 12345);
   res.send('hello');
});

router.get('/create' , controller.create);

router.post('/create',validate.postCreate, controller.postCreate);

router.get('/search', controller.search);

router.get('/:id',controller.getId);


module.exports=router;