const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const dataPPJ = sq.define('dataPPJ',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaPerusahaan:{
        type:DataTypes.STRING
    },
    provinsiPPJ:{
        type:DataTypes.STRING
    },
    kabKotaPPJ:{
        type:DataTypes.STRING
    },
    uraianAlamatPPJ:{
        type:DataTypes.STRING
    },
    
},
{

});


dataPPJ.sync({ alter: true })
module.exports = dataPPJ