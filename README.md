Browserfarm
========
like seti@home but different. work in progress

BSD LICENSE

## How to use
Install the clients, and run the server. Write code like this in your server.

    var browserfarm_server = require('browserfarm-server')

    function download() {
        document.location = 'http://thomaslevine.com'
    }

    browserfarm_server.run(download)

## Things to do

1. Write the thing.
2. Figure out how client code should be written.
