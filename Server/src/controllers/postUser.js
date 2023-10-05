const { User } = require('../DB_connection');

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ error: "Faltan datos" });

  //findOrCreate = busca el email, si lo encuentra no lo crea, en caso de que no lo encuentre crea el email.
  try {
    const user = await User.findOrCreate({
      where: {
        // email: email,
        // password: password
        email,
        password
      }
    })
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = postUser;