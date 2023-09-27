import jwt from 'jsonwebtoken';

const userExtractor = async (req,res, next) => {

  // Obtener el token de las cookies
  const tokenCookie = req.cookies.token;

  // Decodificamos el token con el metodo verify de jwt
  let decodedToken = {};
  try {
    decodedToken = jwt.verify(tokenCookie, process.env.SECRET);
  } catch {}

  // Una vez decodificado el token confirmamos que el mismo sea válido, de lo contrario retornamos el status 401 y redirigimos a login
  if (!decodedToken.user) {
    return res.status(401).redirect('/admin/login');
  }

  // Siguiente middleware
  next();

}

export default userExtractor;