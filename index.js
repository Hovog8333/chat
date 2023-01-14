const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname+'/views'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+  '/index.html');
});

io.on('connection', (socket)=>{
    socket.on('chat message', (data)=>{
        io.emit('chat message', {
            messages: data.messages,
            name: data.name
        });
    });
});


http.listen(3000);