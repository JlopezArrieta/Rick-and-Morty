const axios = require('axios');

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then((data) => {
      let character = {
        key: data.id,
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        origin: data.origin,
        image: data.image
      }
      res
        .writeHead(200, { 'Content-type': 'application/json' })
        .end(JSON.stringify(character))
    })
    .catch(err => res
      .writeHead(500, { 'Content-type': 'text/plain' })
      .end(err.menssage)
    )
}


module.exports = getCharById;