import express from "express";
import { createServer } from 'http';
import { Server } from 'socket.io'

const app = express();
const server = createServer(app);


const teamMembers = {};


const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

const getAllSockerUsers = (roomId) => {

  return Array.from(io.sockets.adapter.rooms.get(roomId)).map(socketId => {
    return {
      socketId,
      userName: teamMembers[socketId]
    }
  })
}

io.on('connection', (socket) => {
  console.log("connection", `User connected ${socket.id}`)
  socket.on('CREATE_ROOM', ({ roomId, userName }) => {

    teamMembers[socket.id] = userName;
    socket.join(roomId);
    const allTeamMembers = getAllSockerUsers(roomId);

    allTeamMembers.forEach(({ socketId }) => {
      io.to(roomId).emit("ROOM_JOINED", { allTeamMembers, userName, socket: socket.id });
    })

  })



  socket.on('disconnecting', (reason) => {
    console.log("disconnected: ". reason)
  })
});

app.get('/get', (req, res) => {
    res.json(teamMembers)
})

export default server;