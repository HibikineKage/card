const port = 443;
const io = require('socket.io')(port);

io.sockets.on('connection', (scket: any) => {});
