const socket = io() //connect the client with the server

socket.on("countUpdated", (count) => { //receive an event from the server
    console.log("The count as been updated, "+ count)
})

document.querySelector("#increment").addEventListener("click", () => {
    console.log("clicked")
    socket.emit("increment") //send event to server
})