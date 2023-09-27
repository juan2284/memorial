import jwt from "jsonwebtoken";
import { User } from '../models/Users.js';
import dotenv from "dotenv/config";
import bcrypt from 'bcrypt';

const authLogin = async (req, res) => {

  // Capturar los datos del formulario
  const {user, pass} = req.body;
  // Buscar usuario en BDD
  const cotejarUsuario = await User.findOne({where: {user}});
  // Revisar que el usuario existe y que la contraseña indicada corresponde con la almacenada en la BDD
  const passCorrect = cotejarUsuario === null ? false : await bcrypt.compare(pass, cotejarUsuario.pass);

  // Si el cotejamiento fue fallido, entonces retornamos el status 401 y redirigimos a la página de login con la variable auth=false
  if (!(passCorrect)) {
    return res.status(401).redirect('/admin/login?auth=false');
  }

  // Si el cotejamiento fue exitoso, creamos el paypload para el token
  const userForToken = {
    user
  };

  // Ahora firmamos el token utilizando el metodo .sign() de jwt y le damos un tiempo de expiración de 30 días
  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 30
  });

  // Creamos la cookie para almacenar el token
  res.cookie('token', token);
  // Redirigimos a la página de Admin
  res.redirect('/admin');

}

export {
  authLogin
}