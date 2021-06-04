const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users = require('./usersModel');

const masterPelatihan = sq.define('masterPelatihan',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaPelatihan:{
        type: DataTypes.STRING
    },
    jumlahPeserta:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    tanggalPelatihan:{
        type:DataTypes.DATE
    },
    lokasi:{
        type:DataTypes.STRING
    }
    
},
{

});

masterPelatihan.belongsTo(users)
users.hasMany(masterPelatihan)

masterPelatihan.sync({ alter: true })
module.exports = masterPelatihan