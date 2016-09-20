var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var request = require('request');
var bodyParse = require('body-parser');
var yelpRouter = require('./router/yelpRouter')


app.use(cors());
app.use(bodyParse.json({limit: '50mb'}));
app.use(express.static('./client'));

app.use('/api/yelp', yelpRouter)

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname,'../index.html'));
});


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('we are listening on: ', app.get('port')));
