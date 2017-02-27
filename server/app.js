var express = require('express');
var app = express();
var path = require('path');
var port = 3000;


// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  }
];

// static file requests
app.use(express.static('server/public'));

// routes


// Send index.html file
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

app.get('/jokes', function(req, res) {
  res.send(jokes);
});

// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
