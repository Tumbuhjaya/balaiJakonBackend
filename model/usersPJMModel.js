const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')
const PJM = require('./PJMModel')

const usersPJM = sq.define('usersPJM',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   jabatan:{
       type:DataTypes.STRING
   }
},
{
paranoid:true
});

usersPJM.belongsTo(users)
users.hasMany(usersPJM)

usersPJM.belongsTo(PJM)
PJM.hasMany(usersPJM)

usersPJM.sync({ alter: true })
module.exports = usersPJM