const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const organisasiKL = sq.define('organisasiKL',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaOrganisasiKL:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});

organisasiKL.sync({ alter: true })
module.exports = organisasiKL