const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');


const DJBK = sq.define('DJBK',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaDJBK:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});

DJBK.sync({ alter: true })
module.exports = DJBK