import Sequelize from 'sequelize';
import db from '../config/db.js';

export const User = db.define('users',{
  user: {
    type: Sequelize.STRING
  },
  pass: {
    type: Sequelize.STRING
  }
});