const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const organisasiPUPR = sq.define('organisasiPUPR',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaOrganisasiPUPR:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});

organisasiPUPR.sync({ alter: true })
module.exports = organisasiPUPR