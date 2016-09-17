const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./client'));

app.get('*', function (request, response){
  response.sendFile(path.resolve('./client', 'index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('we are listening on: ', app.get('port')));

