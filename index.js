const server = require('http');
const data = require('./utils/data');


server.
  createServer((req, res) => {
    //esta linea lo que hace es darle permisos al front end para pedir cualquier peticion.
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split('/').at(-1);

      //El método find() devuelve el valor del primer elemento del array que cumple la 
      //función de prueba proporcionada.
      const personaje = data.find((char) => {
        //con Number se parsea o con el signo mas (+)
        //pasa un num en string a numero
        return char.id === +id
      });

      if (personaje) {
        //JSON.stringify = arraga el obj de javaScript y lo convierte 
        //en JSON, en este caso a el obj personaje.
        res.writeHead(200, { "Content-Type": "application/json" })
        return res.end(JSON.stringify(personaje));
      }
      else {
        //La propiedad Response.writeHead() es una propiedad incorporada del módulo 'http' 
        //que envía un encabezado de respuesta a la solicitud.
        res.writeHead(404, { "Content-Type": "application/json" })
        return res.end(JSON.stringify({ error: "Character not found" }))
        //La función res.end() se utiliza para finalizar el proceso de respuesta. 
      }
    }
  })
  .listen(3001)


