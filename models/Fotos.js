import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Foto = db.define('fotos', {
  tipo: {
    type: Sequelize.STRING
  },
  nombre: {
    type: Sequelize.STRING
  },
  alt: {
    type: Sequelize.STRING
  },
  ruta: {
    type: Sequelize.STRING
  }
});