import express from 'express';
// Importar la conexión a la BDD
import db from './config/db.js';
// Importar el router
import router from './routes/index.js';
// Importar dotenv
import dotenv from 'dotenv/config';
// Importar cookie parser para compartir la verificación
import cookieParser from 'cookie-parser';

const app = express();

// Definir puerto de desarrollo
const port = process.env.PORT || 6060;

// Conectar la BDD
db.authenticate()
  .then(() => console.log('Base de Datos Conectada'))
  .catch(error => console.log(error));

// Habilitar PUG
app.set('view engine', 'pug');

// Middleware para año actual y nombre del sitio
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = 'Memorial';
  next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

// Especificar la carpeta Public
app.use(express.static('public'));


// Usar el router
app.use('/', router);

app.use(function(req, res, next) {
  res.status(404).render('no-existe', {
    pagina: `Doesn't Exist`
  });
});

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});