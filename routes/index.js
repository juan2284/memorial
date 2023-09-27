import express from 'express';
import { 
  paginaInicio,
  paginaHistoria,
  paginaTestimoniales,
  paginaGaleria,
  paginaContacto,
  paginaAdminLogin,
  paginaAdmin,
  paginaAdminLogout,
  paginaAdminTestimoniales,
  paginaEditaMensaje,
  paginaAdminFotos,
  paginaEditaFoto,
  paginaAdminAgregar
} from '../controllers/paginaController.js';
import { guardarTestimonial } from '../controllers/guardarController.js';
import { editarMensaje, eliminarMensaje, publicarMensaje, editarFoto, eliminarFoto, agregarFoto } from '../controllers/editarController.js';
import { authLogin } from '../controllers/authController.js';
import userExtractor from '../middlewares/userExtractor.js';
import multerUpload from '../middlewares/uploadFiles.js';

// Definir el router
const router = express.Router();

// Definir rutas y controladores
// Rutas principales
router.get('/', paginaInicio);
router.get('/historia', paginaHistoria);
router.get('/testimoniales', paginaTestimoniales);
router.get('/galeria', paginaGaleria);
router.get('/contacto', paginaContacto);
router.post('/testimoniales', guardarTestimonial);

// Rutas admin
router.get('/admin/login', paginaAdminLogin);
router.post('/admin', authLogin);
router.get('/admin', userExtractor, paginaAdmin);
router.get('/admin/logout', paginaAdminLogout);

// Rutas Admin Mensajes
router.get('/admin/testimoniales', userExtractor, paginaAdminTestimoniales);
router.get('/admin/editar-mensaje/:id', userExtractor, paginaEditaMensaje);
router.post('/admin/editar-mensaje/:id', userExtractor, editarMensaje);
router.get('/admin/mensaje/:id/del', userExtractor, eliminarMensaje);
router.get('/admin/mensaje/:id/pub', userExtractor, publicarMensaje);

// Rutas Admin Fotos
router.get('/admin/fotos', userExtractor, paginaAdminFotos);
router.get('/admin/editar-foto/:id', userExtractor, paginaEditaFoto);
router.post('/admin/editar-foto/:id', userExtractor, editarFoto);
router.get('/admin/foto/:id/del', userExtractor, eliminarFoto);
router.get('/admin/agregar-foto', userExtractor, paginaAdminAgregar);
router.post('/admin/agregar-foto', multerUpload.single('archivo'), agregarFoto);

export default router;