var express = require('express');
var path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3333, function() {
    console.log('App started listening on port 3333');
});