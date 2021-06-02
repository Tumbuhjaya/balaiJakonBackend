const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const usersMitra = sq.define('usersMitra',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kabKotaAlamat:{
        type:DataTypes.STRING
    },
    uraianAlamat:{
        type:DataTypes.STRING
    },
    lembagaPendidikanSaatIni:{
        type:DataTypes.STRING
    },
    jenisLembaga:{
        type:DataTypes.STRING
    }
},
{
paranoid:true
});

usersMitra.belongsTo(users)
users.hasMany(usersMitra)

usersMitra.sync({ alter: true })
module.exports = usersMitra