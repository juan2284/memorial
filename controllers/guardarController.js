import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {

  // Obtener los datos del formulario desde las cabeceras de la solicitud
  const {name, email, message} = req.body;

  // Se genera un código único para el mensaje
  const cod = new Date().getTime();

  // Generar la fecha y hora del mensaje
  const months = ['Ene', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = new Date().getUTCFullYear();
  const month = new Date().getUTCMonth();
  const day = new Date().getUTCDate();
  const hour = new Date().getUTCHours();
  const minute = new Date().getUTCMinutes();
  const second = new Date().getUTCSeconds();

  const monthString = months[month];
  const dateEnd = monthString + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ':' + second;

  try {
    await Testimonial.create({
      name,
      email,
      message,
      cod,
      date: dateEnd
    });

    res.redirect('/testimoniales');
  } catch (error) {
    console.log(error);
  }
}

export {
  guardarTestimonial
}