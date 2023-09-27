const server = require('../app');
const session = require('supertest');
//Nota: agent = request, le cambiamos el nombre. Para hacerlo mas claro, 
//request es el que utilizamos para hacer la peticion.
//const agent = session(app);
const request = session(server);


// it("Responde con status: 200", async () => {
// await agent.get('/rickandmorty/character/1').expect(200);
// })

//NOTA: 
// // toHaveProperty: Esta función se utiliza para comprobar si un objeto tiene una propiedad específica con un valor específico. Es especialmente útil cuando se realizan pruebas unitarias o de integración para asegurarse de que un objeto tenga ciertas propiedades definidas.

const character = {
  id: 923,
  name: 'Jav',
  species: 'Human',
  gender: 'Masculino',
  status: 'Estudent',
  origin: {
    name: 'cohote42b'
  },
  image: 'image.jpg'
};

describe("test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    //Nota: se ecribe la misma funcion de arriba de una manera mas descriptiva o entendible.
    it("Responde con status: 200", async () => {
      const response = await request.get('/rickandmorty/character/1');
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await request.get('/rickandmorty/character/1');
      for(const prop in character){
        expect(response.body).toHaveProperty(prop);
      };
    });

    it('Si hay un error responde con status: 500', async () => {
     const response = await request.get('/rickandmorty/character/1700r');
        expect(response.statusCode).toBe(500)
    });
  });

  const access = {access: true};
  describe("GET /rickandmorty/login", () => {
    it('Credenciales correctas en un objeto con la propiedad access en true si el usuario es valido', async()=>{
      const response = (await request.get('/rickandmorty/login?email=jalop123@gmail.com&password=javier7'));
      expect(response.body).toEqual(access);
    });

    it('Credenciales incorrectas en un objeto con propiedad access en false si el usuario no es valido', async()=>{
      const response = (await request.get('/rickandmorty/login?email=jalop23@gmail.com&password=javr7'));
      access.access = false;
      expect(response.body).toEqual(access);
    });
  });

  describe("POST /rickandmorty/fav", () =>{
    it("Debes guardar el mensaje en favoritos", async() => {
      const response = await request.post('/rickandmorty/fav').send(character);
      expect(response.body).toContainEqual(character);
    });

    it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
      character.id = 1923;
      character.name = 'Cohorte42b';
      const response = await request.post('/rickandmorty/fav').send(character);
      expect(response.body.length).toBe(2);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
      const response = await request.delete('/rickandmorty/fav/2');
    });

    it("Si el ID enviado existe, deberia eliminarlo de favoritos", async () => {
      const response = await request.delete('/rickandmorty/fav/1923');
      expect(response.body.length).toBe(1);
    });
  });
});
