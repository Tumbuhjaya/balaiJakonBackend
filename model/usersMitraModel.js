const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')
const lembaga = require('./lembagaModel')

const usersMitra = sq.define('usersMitra',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    jabatan:{
        type:DataTypes.STRING
    },
  
},
{
paranoid:true
});

usersMitra.belongsTo(users)
users.hasMany(usersMitra)

usersMitra.belongsTo(lembaga)
lembaga.hasMany(usersMitra)

usersMitra.sync({ alter: true })
module.exports = usersMitra