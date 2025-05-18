const Sequelize = require('sequelize');

  const sequelize = new Sequelize('db_projeto_back', 'root', '178181', {
   host: '127.0.0.1',
   dialect: 'mysql'
  }) 

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }