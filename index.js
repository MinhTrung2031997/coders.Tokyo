const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const userRoute = require('./routes/user.route');
const  cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render("index", {
        name: 'AAA'
    });
});

app.use('/users', userRoute);
app.use(cookieParser());

let listen = app.listen(port, () => {
    console.log('Server listening on port ' + port);
});



