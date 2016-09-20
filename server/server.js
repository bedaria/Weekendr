var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var request = require('request');
var bodyParse = require('body-parser');
var yelpRouter = require('./router/yelpRouter')

app.use('/api/yelp', yelpRouter)

app.use(cors());
app.use(bodyParse.json({limit: '50mb'}));
app.use(express.static('./build'));

app.get('*', function (request, response){
  response.sendFile(__dirname + '/'+ 'index.html');
});

app.use('/api', routes)

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('we are listening on: ', app.get('port')));

