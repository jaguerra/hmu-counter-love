var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/test.html');
});

app.get('/heart.svg', function (req, res) {
    res.sendFile(__dirname + '/heart.svg');
});

app.get('/poo.png', function (req, res) {
    res.sendFile(__dirname + '/poo.png');
});

app.get('/love', function (req, res) {
    res.send('OK');
    io.emit('love', true);
});

app.get('/poo', function (req, res) {
    res.send('\uD83D\uDCA9');
    io.emit('poo', true);
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});
