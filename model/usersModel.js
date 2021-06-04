const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');

const users = sq.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    nama:{
        type:DataTypes.STRING
    },
    noHp:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.STRING
    },
    foto:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});


users.sync({ alter: true })
module.exports = users