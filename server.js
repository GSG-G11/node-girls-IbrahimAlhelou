// calling Module
const http = require("http");
const fs = require("fs");
const path = require("path");
const queryString = require("querystring");
const router = require("./router.js")
// Intialize the server
const message = "there are no one";

const server = http.createServer(router);


// Detect the port number
const PORT = 8000;
// Listen
server.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}.  Ready to accept requests!`
  );
});
