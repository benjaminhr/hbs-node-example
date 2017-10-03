var express = require('express');
var app = express();
var redis = require('redis');
var client = redis.createClient();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var hbs = require('express-handlebars');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var data = require('./hbsData');

app.get('/', (req,res) => {
  res.render('home', data);
})

var port = process.env.PORT || 8080;
app.listen(port);
