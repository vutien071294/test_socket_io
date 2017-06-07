var express =  require("express");
var app =  express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server  = require("http").Server(app);
var io = require('socket.io')(server);
server.listen(3000);

io.on("connection", function(socket){
	console.log(socket.id);
	console.log('co nguoi ket noi');

	socket.on("disconnect", function(){
		console.log(socket.id+" da ngat ket noi");
	})

	socket.on("Client-send-data", function(data){
		console.log(socket.id + 'vừa nói' + data);
		// io.sockets.emit("Server-send-data-chat", data + '8888');
		// socket.emit("Server-send-data-chat", '8888');
		socket.broadcast.emit("Server-send-data-chat", data);
	});

});



app.get("/", function(req, res){
	res.render("trangchu");
});