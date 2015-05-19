var express = require('express');
var path = require('path');
var app = express();

app.use(express.static("app"));

/**
 * Test Data
 */
feedback = [];

while (feedback.length < 100) {
  feedback.push({
      id: feedback.length,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  });
}

app.get('/api/feedback/getAllFeedback', function (request, response) {
    response.json(feedback);
});


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
