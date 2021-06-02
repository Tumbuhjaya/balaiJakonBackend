const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');

const usersPenggunaJasa = sq.define('usersPenggunaJasa',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    organisasi:{
        type:DataTypes.STRING
    },
    provinsiAlamatOrganisasi:{
        type:DataTypes.STRING
    },
    kabKotaAlamatOrganisasi:{
        type:DataTypes.STRING
    },
    uraianAlamatUnitKerja:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});


usersPenggunaJasa.sync({ alter: true })
module.exports = usersPenggunaJasa