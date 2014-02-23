var emitStream = require('emit-stream')
var JSONStream = require('JSONStream')
var websocket = require('websocket-stream')

function browserfarm_client(url) {
    var client = websocket('ws://localhost:9000')
    client = client.pipe(JSONStream.parse([true]))
    var events = emitStream(client)
    events.on('pick', receive)
}

function receive(func){
    eval(func)(send)
}

function send(error, data){
    // Send to the server
}

// browserfarm_client(ws://browserfarm.thomaslevine.com)
