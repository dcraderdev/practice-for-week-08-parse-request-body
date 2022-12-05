const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const fs = require('fs');
const path = require('path');



const http = require('http');

const port = 5005;

server = http.createServer((req,res) => {
  // if (req.method === 'GET' && req.url === '/') {
  //   res.statusCode = 200;
  //   res.setHeader('Content-Type', 'text/HTML');
  //   return res.end('Server is listening on port 5000')



    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        return res.end('Server is listening on port 5000')
    }
    if (req.method === 'POST' && req.url === '/') {
      res.statusCode = 302;
      res.setHeader('Content-Type', 'text/plain');

      return res.end('Server is listening on port 5000')
  }



})





/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };