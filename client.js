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
