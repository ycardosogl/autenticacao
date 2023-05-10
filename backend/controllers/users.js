const users = require('../model/users.js')
const jwt = require('jsonwebtoken');
const secretKey = 'chave_secreta_do_token';




exports.createUsuario = async (req, res) => {
    try {
      const { email, nome, senha, nrsec } = req.body;
  
      const payload = {
        email,
        nome,
        senha,
        nrsec
      };
  
      const newUser = new users.UsuariosModel(payload);
      newUser.token = jwt.sign(payload, secretKey);
  
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  


}

exports.getonelogin = async (req, res) => {
    try {


        const user = await users.UsuariosModel.findOne({ email: req.body.email,senha: req.body.senha  });
        console.log(user)
        if (!user) {
            return res.status(404).json({ message: "Usuario não encontrado" });
        }
        else {
            return res.status(201).json({ message: "encontrado" });
        }

    } catch (error) { }
}
