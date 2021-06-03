const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const usersPJTK = sq.define('usersPJTK',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kabKotaDomisili:{
        type:DataTypes.STRING
    },
    uraianAlamatDomisili:{
        type:DataTypes.STRING
    },
    pendidikanTertinggi:{
        type:DataTypes.STRING
    },
    pendapatanPerbulan:{
        type:DataTypes.INTEGER
    },
    statusPekerjaan:{
        type:DataTypes.STRING
    },
    namaPerusahaan:{
        type:DataTypes.STRING
    }

},
{
paranoid:true
});

usersPJTK.belongsTo(users)
users.hasMany(usersPJTK)

usersPJTK.sync({ alter: true })
module.exports = usersPJTK