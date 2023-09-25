const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = (req, res) => {
  const { id } = req.params;
  
  axios.get(URL + id)
  .then(response => response.data)
    .then((data) => {
      const { id, name, species, origin, image, gender, status } = data
      const character = {
        id, 
        name,
        species,
        origin,
        image,
        gender,
        status
      }
      return character.name
      ? res.status(200).json(character) 
      : res.status(404).send('Not fount')
    })
    .catch((error) => {
      return res.status(500).send(error.message)
    })
}

module.exports = {getCharById};