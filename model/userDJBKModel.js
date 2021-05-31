const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('../model/usersModel')

const userDJBK = sq.define('userDJBK',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    namaUnitKerja:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    provinsiAlamatUnitKerja:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    kabKotaAlamatUnitKerja:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    uraianAlamatUnitKerja:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    jabatan:{
        type:DataTypes.STRING,
        defaultValue:""
    }
},
{
paranoid:true
});

userDJBK.belongsTo(users)
users.hasMany(userDJBK)

userDJBK.sync({ alter: true })
module.exports = userDJBK