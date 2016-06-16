var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/love', function (req, res) {
    res.send('OK');
    io.emit('love', true);
    console.log('♥');
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});
