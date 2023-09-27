import { Testimonial } from "../models/Testimoniales.js";
import { Foto } from "../models/Fotos.js";
import fs from 'fs';

const editarMensaje = async (req, res) => {

  // Obtener de la URL el id del mensaje que se va a modificar
  const {id} = req.params;
  // Obtener los datos del formulario desde las cabeceras de la solicitud
  let {message, parrafo_1, parrafo_2, parrafo_3} = req.body;

  // Establecer en null los campos que vengan en blanco
  if (message === '' || message === 'null') {
    message = null;
  }
  if (parrafo_1 === '' || parrafo_1 === 'null') {
    parrafo_1 = null;
  }
  if (parrafo_2 === '' || parrafo_2 === 'null') {
    parrafo_2 = null;
  }
  if (parrafo_3 === '' || parrafo_3 === 'null') {
    parrafo_3 = null;
  }

  try {
    const mensajeEditado = await Testimonial.findOne({where: {id}});

    await mensajeEditado.update({
      message,
      parrafo_1,
      parrafo_2,
      parrafo_3
    });

    await mensajeEditado.save();

    res.redirect('/admin/testimoniales');
  } catch (error) {
    console.log(error);
  }
}

const publicarMensaje = async (req, res) => {

  // Obtener de la URL el id del mensaje que se va a modificar
  const {id} = req.params;

  try {
    const mensaje = await Testimonial.findOne({where: {id}});

    await mensaje.update({
      publicar: 'SI'
    });

    await mensaje.save();

    res.redirect('/admin/testimoniales');
  } catch (error) {
    console.log(error);
  }
}

const eliminarMensaje = async (req, res) => {
  const {id} = req.params;
  
  try {
    const mensajeEliminar = await Testimonial.findOne({where: {id}});

    await mensajeEliminar.destroy();

    res.redirect('/admin/testimoniales');
  } catch (error) {
    console.log(error);
  }
}

const editarFoto = async (req, res) => {

  // Obtener de la URL el id del mensaje que se va a modificar
  const {id} = req.params;
  // Obtener los datos del formulario desde las cabeceras de la solicitud
  const {tipo, nombre, alt, ruta} = req.body;

  try {
    const fotoEditado = await Foto.findOne({where: {id}});

    await fotoEditado.update({
      tipo,
      nombre,
      alt,
      ruta
    });

    await fotoEditado.save();

    res.redirect('/admin/fotos');
  } catch (error) {
    console.log(error);
  }
}

const eliminarFoto = async (req, res) => {
  const {id} = req.params;
  
  try {
    const fotoEliminar = await Foto.findOne({where: {id}});

    fs.unlink(`public/img/${fotoEliminar.ruta}`, error => {
      if (error) throw error;
      console.log('Archivo Eliminado');
    });

    await fotoEliminar.destroy();

    res.redirect('/admin/fotos');
  } catch (error) {
    console.log(error);
  }
}

const agregarFoto = async (req, res) => {

  const {tipo, nombre, alt, ruta} = req.body;

  try {
    await Foto.create({
      tipo,
      nombre,
      alt,
      ruta
    });

    res.redirect('/admin/fotos');
  } catch (error) {
    console.log(error);
  }
}

export {
  editarMensaje,
  eliminarMensaje,
  publicarMensaje,
  editarFoto,
  eliminarFoto,
  agregarFoto
}