import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === "production" ? "wss://docschatai.com:3010" : "ws://localhost:3010";
const socket = io(URL);
export default socket;