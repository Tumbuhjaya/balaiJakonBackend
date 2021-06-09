const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const PJM = sq.define('PJM',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaPJM:{
        type:DataTypes.STRING
    },
    provinsiPJM:{
        type:DataTypes.STRING
    },
    kabKotaPJM:{
        type:DataTypes.STRING
    },
    uraianAlamatPJM:{
        type:DataTypes.STRING
    },
    
},
{
paranoid:true
});


PJM.sync({ alter: true })
module.exports = PJM