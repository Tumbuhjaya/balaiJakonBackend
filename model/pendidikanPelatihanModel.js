const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const pendidikanPelatihan = sq.define('pendidikanPelatihan',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaPendidikan:{
        type:DataTypes.STRING
    },
    tanggalMulai:{
        type:DataTypes.STRING
    },
    tanggalSelesai:{
        type:DataTypes.STRING
    },
    uploadSKP:{
        type:DataTypes.STRING
    }
   
},
{
paranoid:true
});

pendidikanPelatihan.belongsTo(users)
users.hasMany(pendidikanPelatihan)

pendidikanPelatihan.sync({ alter: true })
module.exports = pendidikanPelatihan