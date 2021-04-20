const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');

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
    }
    
},
{
paranoid:true
});


masterPelatihan.sync({ alter: true })
module.exports = masterPelatihan