const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const request = require('request');
const bodyParse = require('body-parser');

const yelpRouter = require('./router/yelpRouter');
const searchRouter = require('./router/search.router')
require('./database.js');

app.use(cors());
app.use(bodyParse.json({limit: '50mb'}));
app.use(express.static('./client'));

// app.use('/api/search', searchRouter)

require('./routes.js')(app, express);

app.get('/', (request, response) => response.sendFile('index.html'));


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('we are listening on: ', app.get('port')));
