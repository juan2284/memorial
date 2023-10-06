import Sequelize from 'sequelize';
<<<<<<< HEAD
import dotenv from 'dotenv/config';
=======
>>>>>>> e7a4d61f79d73ebc84bf362271172d71b53b25cf

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: '3306', 
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

<<<<<<< HEAD
export default db;
=======
export default db;
>>>>>>> e7a4d61f79d73ebc84bf362271172d71b53b25cf
