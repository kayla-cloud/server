const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`The server running at http://${hostname}:${port}/`);
});

// create git branch called json 
// push the code to git 
// add a readme file 
// push package lock json file
// push package json file 
// push gitignore file ?
 