/*************************************************************

  *You should understand the logic of this handler and implement it in this function

  *Pass this function to the first-server.js and run your test on another terminal

  *The playground did already give you the basic knowledge to do this manipulation

  *Hint* Check out the node module documentation for more detail on common.js standard
  *at http://nodejs.org/api/modules.html.

**************************************************************/

//! Take in mind that the code inside this function handle a request(input)
//! And then respond(output) to it
//! The only new thing is networking since the two computers(server) are connected through internet
//! Read the console log(terminal) after exporting it to the server

//? what is the **method** used by default when making a simple request to this server ? and what is the **end point** ?

//* YOUR ANSWER HERE

//--------------------------------------------------------------------- Handler !


//here where you are going to store your data

const blogs = {results:[]}

const handle = function(request, response) {

  /* Request and Response come from node's http module.

    They include information about both the incoming request, such as
    headers and URL, and about the outgoing response, such as its status
    and content.

    Documentation for both request and response can be found in the HTTP section at
    http:nodejs.org/documentation/api/

    Do some basic logging.

    Adding more logging to your server can be an easy way to get passive
    debugging help, but you should always be careful about leaving stray
    console.logs in your code.
  */

  console.log('Serving request type ' + request.method + ' for url ' + request.url )

  // The outgoing status for a simple OK response

  let statusCode = 200;

  // See the note below about CORS headers.
  let headers = defaultCorsHeaders;

  /*
  *Tell the client we are sending them `plain text` the string `Hello world`.

  * You will need to change this if you are sending something
  * Other than plain text, like JSON or HTML.
  * `` for more information about the content type that you can pass to a `response`

   */

  headers['Content-Type'] = 'text/plain';

  // This is the methode for writing in the header response .writeHead()
  // It takes the status code and other headers in it's parameter




  /**
   *! Make sure to always call response.end() -
   * Node may not send anything back to the client until you do.
   * The string you pass to response.end() will be the body of the response
   * i.e. what shows up in the browser.

   * Calling .end "flushes" the response's internal buffer, forcing
   * node to actually send all the data over to the client.
  */

  //Start here - a small step for a faster progress !

  if (request.url === "/") {
    response.writeHead(statusCode, headers);
    return response.end('hello from main route');
  }
  else if(request.method === "GET" && request.url === "/api/blogs") {
      statusCode = 200;
      headers['Content-Type'] = 'application/json';
      response.writeHead(statusCode, headers);
      return response.end(JSON.stringify(blogs))
  }


};

/*
  ? CORS validation domain is a way to communicate to the browser some information
  ? needed to accept the response from this server

  *more information about CORS :

  These headers will allow Cross-Origin Resource Sharing (CORS).
  This code allows this server to talk to websites that
  are on different domains, for instance, your chat client.

  Your blogging client app is running from a url like file://your/blog/client/index.html,
  which is considered a different domain.

  Another way to get around this restriction is to serve you chat
  client from this domain by setting up static file serving.
*/
/*
  Discover the method Option that will serve as a small documentation of what
  certain paths contain as

*/
let defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports = handle