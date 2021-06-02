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
    kementerianPUPR:{
        type:DataTypes.STRING
    },
    lembagaLain:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    pemprov:{
        type:DataTypes.STRING
    },
    pemkab:{
        type:DataTypes.STRING
    },
    
},
{
paranoid:true
});


usersPenggunaJasa.sync({ alter: true })
module.exports = usersPenggunaJasa