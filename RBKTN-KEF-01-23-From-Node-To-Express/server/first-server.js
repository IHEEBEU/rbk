/*welcome to your first api #web-server #http-server !! */

/* Import node's http module: */
const http = require('http');



// You have to specify a port which your server will listen to
// it is like a door permanently open in your big building that accept
// where you can deal accordingly to the visitors
// http server usually use the port 80, most likely it is occupied so
// so we will use different one 3000 in this case but you usually have no restriction
// on which one you will use; common one used are 8080 and 1337

const port = 3000;


// For now, your computer "local machine" is your server !
// The IP address 127.0.0.1 is the one that we will listen to
// it is a specific address that refers to localhost.
const host = '127.0.0.1';



// We use node's http module to create a server.
//
// The function we pass to http.createServer will be used to handle all
// incoming requests.
//
// After creating the server, we will tell it to listen on the given port and host/IP. */
const server = http.createServer(handle);

console.log('Listening on http://' + host + ':' + port);

server.listen(port, host);

// run your server using the knownledge that you aquired from the playground !
//
//   just run this file in node environment using
//
//   the command line.
//
//    To connect to the server, load http://127.0.0.1:3000 in your web
//    browser.
//
// server.listen() will continue running as long as there is the
// possibility of serving more requests. To stop your server, hit

//    Ctrl-C on the command line.

