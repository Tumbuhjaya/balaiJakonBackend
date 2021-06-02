const { DataTypes } = require('sequelize');
const sq =  require('../config/connection');

const instruktur = sq.define('instruktur',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status:{
        type:DataTypes.STRING
    },
    tot_is_sertifikat:{
        type:DataTypes.INTEGER
    },
    tot_tgl_sertifikat:{
        type:DataTypes.DATE
    },
    tot_terbit:{
        type:DataTypes.DATE
    },
    asessor_is_sertifikat:{
        type:DataTypes.INTEGER
    },
    asessor_no_sertifikat:{
        type:DataTypes.STRING
    },
    asessor_tgl_sertifikat:{
        type:DataTypes.DATE
    },
    asessor_terbit:{
        type:DataTypes.DATE
    },
    mot_is_sertifikat:{
        type:DataTypes.INTEGER
    },
    mot_no_sertifikat:{
        type:DataTypes.STRING
    },
    mot_tgl_sertifikat:{
        type:DataTypes.DATE
    },
    mot_terbit:{
        type:DataTypes.DATE
    },
    perusahaan:{
        type:DataTypes.STRING
    },
    jabatan:{
        type:DataTypes.STRING
    },
    alamat_persh:{
        type:DataTypes.STRING
    },
    kab_persh:{
        type:DataTypes.STRING
    },
    prop_persh:{
        type:DataTypes.STRING
    },
    kode_pos_persh:{
        type:DataTypes.STRING
    },
    telp_persh:{
        type:DataTypes.STRING
    },
    fax_persh:{
        type:DataTypes.STRING
    },
    hp_persh:{
        type:DataTypes.STRING
    },
    email_persh:{
        type:DataTypes.STRING
    },
    alamat_rumah:{
        type:DataTypes.STRING
    },
    rt_rw_rumah:{
        type:DataTypes.STRING
    },
    desa_rumah:{
        type:DataTypes.STRING
    },
    kec_rumah:{
        type:DataTypes.STRING
    },
    id_bps_kabkota:{
        type:DataTypes.INTEGER
    },
    id_bps_prov:{
        type:DataTypes.INTEGER
    },
    kode_pos_rumah:{
        type:DataTypes.STRING
    },
    telp_rumah:{
        type:DataTypes.STRING
    },
    hp_rumah:{
        type:DataTypes.STRING
    },
    status_rumah:{
        type:DataTypes.STRING
    },
    alamat_lain:{
        type:DataTypes.STRING
    },
    rt_rw_lain:{
        type:DataTypes.STRING
    },
    desa_lain:{
        type:DataTypes.STRING
    },
    kec_lain:{
        type:DataTypes.STRING
    },
    kab_lain:{
        type:DataTypes.STRING
    },
    prop_lain:{
        type:DataTypes.STRING
    },
    kode_pos_lain:{
        type:DataTypes.STRING
    },
    telp_lain:{
        type:DataTypes.STRING
    },
    hp_lain:{
        type:DataTypes.STRING
    },
    pendidikan:{
        type:DataTypes.STRING
    },
    jurusan:{
        type:DataTypes.STRING
    },
    keahlian:{
        type:DataTypes.STRING
    },
    keahlian_kategori2:{
        type:DataTypes.STRING
    },
    keterangan_keahlian:{
        type:DataTypes.STRING
    },
    tgl_lulus:{
        type:DataTypes.DATE
    },
    
    
},
{
paranoid:true
});


instruktur.sync({ alter: true })
module.exports = instruktur