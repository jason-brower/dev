var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, "app")));

/*
app.get('/api/activeBooks', function (request, response) {
    response.send(bookShelfApi.getBooks(false));
});

app.get('/api/archivedBooks', function (request, response) {
    response.send(bookShelfApi.getBooks(true));
});

*/


// app.get('/', function (request, response) {
//     response.sendFile(__dirname + '/index.html');
// });

app.listen(8080, function () {
    console.log('Express server started!!!');
});
