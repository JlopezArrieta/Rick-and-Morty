const { Favorite } = require('../DB_connection');

const postFav = async(req, res) => {
try {
    const { id, name, origin, status, image, species, gender } = req.body;
    // console.log(req.body)

    // if(![id, name, origin, status, image, species, gender].every(Boolean)) return res.status(401).send('Faltan datos');
    if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).send('Faltan datos');
    
    //findOrCreate: Esta función se utiliza para buscar un registro en una base de datos 
    //según ciertos criterios y, si no se encuentra ningún registro que coincida con esos 
    //criterios, crear uno nuevo y devolverlo.
    await Favorite.findOrCreate({
        where: {
            id: id,
            name: name,
            origin: origin.name,
            status: status,
            image: image, 
            species: species,
            gender: gender
        }
    })
//findAll: Se utiliza para buscar y recuperar múltiples elementos que coinciden con ciertos 
//criterios en una colección de datos. en este caso busca a todos los favoritos.
    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);

} catch (error) {
    console.log(error)
    return res.status(500).json({error: error.message})
}
}

module.exports =  postFav;