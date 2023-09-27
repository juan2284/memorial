import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.TEXT
  },
  parrafo_1: {
    type: Sequelize.TEXT
  },
  parrafo_2: {
    type: Sequelize.TEXT
  },
  parrafo_3: {
    type: Sequelize.TEXT
  },
  cod: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE
  },
  publicar: {
    type: Sequelize.STRING
  }
});