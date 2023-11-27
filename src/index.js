/*
intalacion npm init --y
creo el json con el mombre dado
npm i moongose.. se crea un arcivo node modules, que no es necesario subir al repo
para ignorar eso uso el .gitignore
https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener de ahi saco el codigo
cabio a localhost:8000
instalo  npm install express --save
copio codiho 
creo carpeta src
*/
// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);

//-----------------------------

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//-----------------------------
//---s
const xd ={

}
console.log("XD")