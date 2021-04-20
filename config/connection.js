const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('balaiJakon', 'postgres', 'Grafika9', {
    host: '147.139.167.33',
    port: 5555,
    dialect: 'postgres',
    logging:false,
  });

  module.exports =  sequelize;