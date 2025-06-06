import { io } from "socket.io-client";

const SOCKET_SERVER_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080/api/v1"
    : `${import.meta.env.VITE_BACKEND_URL}/api/v1`;

// Initialize once
const socket = io(SOCKET_SERVER_URL, {
  transports: ["websocket"],
});

export default socket;
