const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users = require('../model/usersModel')
const usersPenggunaJasa = sq.define('usersPenggunaJasa',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    organisasi:{
        type:DataTypes.STRING
    },
    provinsiAlamatOrganisasi:{
        type:DataTypes.STRING
    },
    kabKotaAlamatOrganisasi:{
        type:DataTypes.STRING
    },
    uraianAlamatOrganisasi:{
        type:DataTypes.STRING
    },
    jenisOrganisasi:{
        type:DataTypes.STRING
    }
    
},
{
paranoid:true
});

usersPenggunaJasa.belongsTo(users)
users.hasMany(usersPenggunaJasa)

usersPenggunaJasa.sync({ alter: true })
module.exports = usersPenggunaJasa