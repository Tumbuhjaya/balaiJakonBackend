const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users = require('../model/usersModel')

const document = sq.define('document',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   namaDocument:{
       type:DataTypes.STRING
   },
   jenisDocument:{
       type:DataTypes.STRING
   }
    
},
{

});

document.belongsTo(users)
users.hasMany(document)

document.sync({ alter: true })
module.exports = document