const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const usersPJM = sq.define('usersPJM',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   kabKotaAlamatPerusahaan:{
       type:DataTypes.STRING
   },
   uraianAlamatDomisili:{
       type:DataTypes.STRING
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

usersPJM.sync({ alter: true })
module.exports = usersPJM