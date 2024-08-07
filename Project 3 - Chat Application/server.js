import WebSocket, { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });
server.on('connection', (socket) => {
  console.log('A client connected');

  socket.on('message', (message) => {
    const messageStr = message.toString();
    console.log('Received:', messageStr);

    server.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(messageStr);
      }
    });
  });
});
