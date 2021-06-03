const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const pengalamanKerja = sq.define('pengalamanKerja',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaPekerjaan:{
        type:DataTypes.STRING
    },
    statusKerja:{
        type:DataTypes.STRING
    },
    namaPerusahaan:{
        type:DataTypes.STRING
    },
    tanggalMulai:{
        type:DataTypes.DATE
    },
    tanggalSelesai:{
        type:DataTypes.DATE
    },
    uraianPeran:{
        type:DataTypes.STRING
    },
    penghasilanPerBulan:{
        type:DataTypes.INTEGER
    },
    suratKeteranganKerja:{
        type:DataTypes.STRING
    }
   
},
{
paranoid:true
});

pengalamanKerja.belongsTo(users)
users.hasMany(pengalamanKerja)

pengalamanKerja.sync({ alter: true })
module.exports = pengalamanKerja