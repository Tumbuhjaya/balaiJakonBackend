const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const provinsi= require('../model/provinsiModel')

const kabKota = sq.define('kabKota',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaKabKota:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});

kabKota.belongsTo(provinsi)
provinsi.hasMany(kabKota)

kabKota.sync({ alter: true })
module.exports = kabKota