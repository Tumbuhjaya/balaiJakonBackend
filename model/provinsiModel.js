const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const provinsi = sq.define('provinsi',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaProvinsi:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});

provinsi.sync({ alter: true })
module.exports = provinsi