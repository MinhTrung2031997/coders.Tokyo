const db = require('../db');
const md5 = require('md5');
module.exports = {

    login: (req, res) => {
        res.render('auth/login');
    },
    postLogin: (req, res, next) => {
        let email = req.body.email;
        let pass = req.body.pass;
        let user = db.get('users').find({email:email}).value();

        if (!user) {
            res.render('auth/login', {
                errors: [
                    "User does not exits"
                ],
                values : req.body
            });
            return;
        }
        let hashPassword = md5(pass);
        console.log(user.pass, hashPassword);
        if (user.pass !== hashPassword) {
            res.render('auth/login', {
                errors: [
                    "Wrong password"
                ],
                values : req.body
            });
            return;
        }
        res.cookie("userId", user.id);
        res.redirect('/users');
    }
};