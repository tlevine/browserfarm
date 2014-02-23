var emitStream = require('emit-stream')
var JSONStream = require('JSONStream')
var websocket = require('websocket-stream')

var client = websocket('ws://localhost:9000')
client = client.pipe(JSONStream.parse([true]))
var events = emitStream(client)
events.on('foo', function(data) { console.log(data) })


function receive(event.data){
    eval(event.data)(send)
}

function send(error, data){

}

function browserfarm_client(url) {
  var ws = new WebSocket(url)
  ws.onmessage = receive

}

// browserfarm_client(ws://browserfarm.thomaslevine.com)
