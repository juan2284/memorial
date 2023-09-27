import { Testimonial } from "../models/Testimoniales.js";
import { Foto } from "../models/Fotos.js";

const paginaInicio = async (req, res) => {

  try {

    res.render('inicio', {
      pagina: 'Inicio'
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaHistoria = async (req, res) => {

  try {

    res.render('historia', {
      pagina: 'Historia'
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaTestimoniales = async (req, res) => {

  try {

    const testimoniales = await Testimonial.findAll({
      where: {publicar: 'SI'},
      order: [
        ["date", "DESC"]
      ]
    });

    res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaGaleria = async (req, res) => {

  const promiseDB = [];
  promiseDB.push(Foto.findAll({
    where: {tipo: '1'},
    order: [
      ["id", "ASC"]
    ]
  }));
  promiseDB.push(Foto.findAll({where: {tipo: '2'}}));

  try {
    const resultado = await Promise.all(promiseDB);

    res.render('galeria', {
      pagina: 'Galeria',
      fotos: resultado[0],
      recordatorios: resultado[1]
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaContacto = async (req, res) => {

  try {

    res.render('contacto', {
      pagina: 'Contacto'
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaAdminLogin = async (req, res) => {
  if (req.query.auth === 'false') {
    try {
      res.render('authError', {
        pagina: 'Error'
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      res.render('admin-login', {
        pagina: 'Login'
      });
    } catch (error) {
      console.log(error);
    }
  }  
};

const paginaAdmin = async (req, res) => {

  const testimonialesCookie = req.cookies.testimoniales;

  const promiseDB = [];
  promiseDB.push(Testimonial.count());
  promiseDB.push(Foto.count());

  try {
    const resultado = await Promise.all(promiseDB);

    let marcador = '';

    if (resultado[0] > testimonialesCookie) {
      marcador = true;
    } else {
      marcador = false;
    }

    res.cookie('testimoniales', resultado[0]);

    res.render('admin', {
      pagina: 'Admin',
      admin: true,
      cantTestimoniales: resultado[0],
      cantFotos: resultado[1],
      marcador
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaAdminLogout = async (req, res) => {

  res.clearCookie('token');

  try {
    res.redirect('/admin/login');

  } catch (error) {
    console.log(error);
  }
}

const paginaAdminTestimoniales = async (req, res) => {

  try {

    const testimoniales = await Testimonial.findAll({
      order: [
        ["date", "DESC"]
      ]
    });

    res.render('admin-mensajes', {
      pagina: 'Admin Mensajes',
      admin: true,
      mensajes: testimoniales
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaAdminFotos = async (req, res) => {

  try {

    const fotos = await Foto.findAll({
      order: [
        ["id", "ASC"]
      ]
    });

    res.render('admin-fotos', {
      pagina: 'Admin Fotos',
      admin: true,
      fotos
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaEditaMensaje = async (req, res) => {

  const {id} = req.params;

  try {
    const testimonial = await Testimonial.findOne({where: {id}});

    res.render('admin-edita-mensaje', {
      pagina: 'Editar Mensaje',
      admin: true,
      testimonial
    });

  } catch (error) {
    console.log(error);
  }
}

const paginaEditaFoto = async (req, res) => {

  const {id} = req.params;

  try {
    const foto = await Foto.findOne({where: {id}});

    res.render('admin-edita-foto', {
      pagina: 'Editar Foto',
      admin: true,
      foto
    });

  } catch (error) {
    console.log(error);
  }
}

const paginaAdminAgregar = async (req, res) => {
  try {
    res.render('admin-agrega-foto', {
      pagina: 'Agregar Foto',
      admin: true
    });

  } catch (error) {
    console.log(error);
  }
}

export {
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
}