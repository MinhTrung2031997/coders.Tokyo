const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const middleware = require('./middleware/auth.middleware');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.render("index", {
        name: 'AAA'
    });
});

app.use('/users',middleware.authLogin,  userRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});



