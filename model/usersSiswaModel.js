const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const usersMitra = sq.define('usersMitra',{
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

usersMitra.belongsTo(users)
users.hasMany(usersMitra)

usersMitra.sync({ alter: true })
module.exports = usersMitra