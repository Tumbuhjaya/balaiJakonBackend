const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const lembaga = sq.define('lembaga',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jenisLembaga:{
        type:DataTypes.STRING
    },
    namaLembaga:{
        type:DataTypes.STRING
    },
    provinsiLembaga:{
        type:DataTypes.STRING
    },
    kabKotaLembaga:{
        type:DataTypes.STRING
    },
    uraianAlamatLembaga:{
        type:DataTypes.STRING
    },
    
},
{
paranoid:true
});


lembaga.sync({ alter: true })
module.exports = lembaga