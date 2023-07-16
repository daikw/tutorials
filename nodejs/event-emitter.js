// https://nodejs.org/api/events.html
const events = require('events');
const util = require('util');

// --------- CLIENT -----------
let counter = 0;
function Client(server) {
	this._number = counter++
	this._server = server

	this.on('message', msg => {
		console.log({
			number: this._number,
			message: msg
		})
	})
}
util.inherits(Client, events.EventEmitter);

Client.prototype.listen = function() {
	this._server.emit('listening', this)
}

// --------- SERVER -----------
function Server() {
	this._clients = []
	this.on('listening', client => {
		this._clients.push(client)
	})
}
util.inherits(Server, events.EventEmitter);

Server.prototype.send = function(msg) {
	this._clients.forEach(client => {
		client.emit('message', msg)
	})
}

// --------- EXECUTE -----------
if (require.main === module){
	const server = new Server()
	const c1 = new Client(server)
	const c2 = new Client(server)

	c1.listen()
	c2.listen()

	server.send('hello')
}
