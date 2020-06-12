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

let count = 0

//Event fired when a new client  is connected
io.on("connection", (socket) =>{ //socket is an obj with connection info
    console.log("New WebSocket connection")
    
    socket.emit("countUpdated", count) //emmit an event to the clients and send "count" data
    
    socket.on("increment", () => { //recevied event from client
        count++
        io.emit("countUpdated", count) //emit the event to ALL clients connected (with socket just with a specific client)
    })
})

server.listen(port, () => { //link to the custom server with the socket
    console.log("Server is running on port " + port)
})