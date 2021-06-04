const { DataTypes, DATE } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const pengalamanMengajar = sq.define('pengalamanMengajar',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bidang:{
        type:DataTypes.STRING
    },
    subBidang:{
        type:DataTypes.STRING
    },
    materi:{
        type:DataTypes.STRING
    },
    tanggalMulai:{
        type:DataTypes.DATE
    },
    tanggalSelesai:{
        type:DataTypes.DATE
    },
    suratKeteranganMengajar:{
        type:DataTypes.STRING
    }
},
{

});

pengalamanMengajar.belongsTo(users)
users.hasMany(pengalamanMengajar)

pengalamanMengajar.sync({ alter: true })
module.exports = pengalamanMengajar