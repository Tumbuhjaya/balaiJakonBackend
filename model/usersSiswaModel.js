const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');
const users= require('./usersModel')

const usersSiswa = sq.define('usersSiswa',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    noKTP:{
        type:DataTypes.STRING,
    },
    fotoKTP:{
        type:DataTypes.STRING
    },
    tanggalLahir:{
        type:DataTypes.DATE
    },
    provinsiDomisili:{
        type:DataTypes.STRING
    },
    kabKotaDomisili:{
        type:DataTypes.STRING
    },
    uraianAlamatDomisili:{
        type:DataTypes.STRING
    },
    lembagaPendidikan:{
        type:DataTypes.STRING
    },
    jenisLembaga:{
        type:DataTypes.STRING
    }
},
{
paranoid:true
});

usersSiswa.belongsTo(users)
users.hasMany(usersSiswa)

usersSiswa.sync({ alter: true })
module.exports = usersSiswa