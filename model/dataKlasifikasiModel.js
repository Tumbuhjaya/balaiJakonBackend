const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const dataKlasifikasi = sq.define('dataKlasifikasi',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jenjang:{
        type:DataTypes.STRING
    },
    klasifikasi:{
        type:DataTypes.STRING
    },
    subKlasifikasi:{
        type:DataTypes.STRING
    },
    kodeSubKlaisifikasi:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});

dataKlasifikasi.sync({ alter: true })
module.exports = dataKlasifikasi