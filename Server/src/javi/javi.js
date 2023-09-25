const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

const express = require('express');
const router = express.Router();

router.get('/character/:id', (req, res) => {
  getCharById(req, res);
});
// router.get("/character/:id", getCharById)// Esto es la parte corta de como escribir lo anterior.

router.get('/login', (req, res) => {
  login(req, res);
});
// router.get("/login", login)// Esto es la parte corta de como escribir lo anterior.

router.post('/fav', (req, res) => {
  postFav(req, res);
});
//router.post("/fav", postFav)// Esto es la parte corta de como escribir lo anterior.

router.delete('/fav/:id', (req, res) => {
  deleteFav(req, res);
});
//router.delete("/fav/:id", deleteFav)// Esto es la parte corta de como escribir lo anterior.

module.exports = router;