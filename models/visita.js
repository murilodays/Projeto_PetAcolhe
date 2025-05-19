const db = require('./db');

const Visita = db.sequelize.define('visitas', {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  numeroCelular: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  cpf: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  animal: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  dataVisita: {
    type: db.Sequelize.DATEONLY,
    allowNull: false
  },
  horaVisita: {
    type: db.Sequelize.TIME,
    allowNull: false
  }
});

// Visita.sync({ force: true }); // Execute isso apenas uma vez para criar a tabela

module.exports = Visita;

