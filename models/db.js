const Sequelize = require('sequelize');

  const sequelize = new Sequelize('nome_do_seu_banco', 'root', 'sua_senha', {
   host: '127.0.0.1',
   dialect: 'mysql'
  }) 

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }