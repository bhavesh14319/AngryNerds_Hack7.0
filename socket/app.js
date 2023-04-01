const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "http://localhost:3001",
    },
});

io.use((socket, next) => {
    const username = socket.handshake.auth.name;
    if (!username) {
        return next(new Error("invalid username"));
    }
    socket.username = username;
    next();
});

io.on('connection', (socket) => {
    console.log('Connection Established');
})

httpServer.listen(8080, () => {
    console.log('Server is running at 3002');
})