const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const usersInstruktur = sq.define('usersInstruktur',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   pendidikanTertinggi:{
       type:DataTypes.STRING
   },
   bidangKeahlian:{
       type:DataTypes.STRING
   }
},
{
paranoid:true
});

usersInstruktur.belongsTo(users)
users.hasMany(usersInstruktur)

usersInstruktur.sync({ alter: true })
module.exports = usersInstruktur