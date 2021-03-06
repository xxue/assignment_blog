const express = require ('express');
const app = express();

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const path = require('path');

const logger = require('morgan');

const home = require('./routes/home');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use('/', home);

var PORT = 1616;

app.listen(PORT, function(){console.log("listening on BLOG, press Ctrl+C to exit")});
