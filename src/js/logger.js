import io from "socket.io-client";

const logMessage = (msg) => {
  var socket = io.connect();
  socket.emit("ding");

  console.log(msg);
};
export default logMessage;
