const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');

const users = sq.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
         type:DataTypes.STRING,
         unique:true
       
    },
    password:{
        type:DataTypes.STRING,
        defaultValue:''
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    nama:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    alamat:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    noHp:{
        type:DataTypes.STRING,     
    },
    tempatLahir:{
        type:DataTypes.STRING,
    },
    tanggalLahir:{
        type:DataTypes.DATE
    },
    noKTP:{
        type:DataTypes.STRING
    },
    approval:{
        type:DataTypes.INTEGER,
        defaultValue:1
    },
    email:{
        type:DataTypes.STRING,
        defaultValue:""
    }
    
},
{
paranoid:true
});


users.sync({ alter: true })
module.exports = users