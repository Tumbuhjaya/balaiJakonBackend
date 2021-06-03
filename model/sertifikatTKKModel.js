const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const sertifikatTKK = sq.define('sertifikatTKK',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    lingkupLevelJabatan:{
        type:DataTypes.STRING
    },
    tanggalTerbit:{
        type:DataTypes.DATE
    },
    tanggalBerlaku:{
        type:DataTypes.DATE
    },
    lembagaPenerbit:{
        type:DataTypes.STRING
    },
    dokumen:{
        type:DataTypes.STRING
    },
    statusVerifikasi:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
},
{
paranoid:true
});

sertifikatTKK.belongsTo(users)
users.hasMany(sertifikatTKK)

sertifikatTKK.sync({ alter: true })
module.exports = sertifikatTKK