const http = require('http');
const getCharById = require('./controllers/getCharById');


http.
  createServer((req, res) => {
    //esta linea lo que hace es darle permisos al front end para pedir cualquier peticion.
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split('/').at(-1);
      getCharById(res, id)
  }
  }).listen(3001)



