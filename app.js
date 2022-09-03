const express = require('express')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000


app.set('views', './views')
app.use(express.static('./views'))

io.on('connection', socket => {
    console.log("web socket connection on...")
    // console.log(socket)
    socket.on('send-message', data => { 
        console.log(data)
        // socket.emit('test' ,data)    
        // io.sockets.emit('test' ,data)
        socket.broadcast.emit('test' ,data)
     });
  });




app.get('/', (req, res) => res.render('index.html'))
server.listen(port, () => console.log(`Example app listening on port ${port}!`))