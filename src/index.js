const http = require("http")
const path = require("path")
const express = require("express") 
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app) //create a server
const io = socketio(server) //link the socket to that server

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, "../public"))) //set the public folder

io.on("connection", () =>{
    console.log("New WebSocket connection")
})

server.listen(port, () => { //link to the custom server with the socket
    console.log("Server is running on port " + port)
})