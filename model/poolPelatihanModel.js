const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users = require('./usersModel')
const masterPelatihan = require('./masterPelatihanModel')
const poolPelatihan = sq.define('poolPelatihan',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status:{
        type:DataTypes.INTEGER
    }
},
{
paranoid:true
});

poolPelatihan.belongsTo(users)
users.hasMany(poolPelatihan)

poolPelatihan.belongsTo(masterPelatihan)
masterPelatihan.hasMany(poolPelatihan)

poolPelatihan.sync({ alter: true })
module.exports = poolPelatihan