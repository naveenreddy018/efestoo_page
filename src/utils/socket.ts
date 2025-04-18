// import { io } from 'socket.io-client';

// const socket = io('http://localhost:4000'); // Your backend URL

// export default socket;
import { io, Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3001");

export default socket;
