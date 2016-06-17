var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var stats = {
    loves: 0,
    poos: 0,
    hits: 0
};

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
    stats.loves ++;
    stats.hits ++;
});

app.get('/poo', function (req, res) {
    res.send('\uD83D\uDCA9');
    io.emit('poo', true);
    stats.poos ++;
    stats.hits ++;
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});

setInterval( function() {
    if (stats.hits > 0) {
        console.log('Per second - Hits:' + stats.hits + ' Love:' + stats.loves + ' Poo:' + stats.poos);
    }
    stats.loves = 0;
    stats.poos = 0;
    stats.hits = 0;
}, 1000);
