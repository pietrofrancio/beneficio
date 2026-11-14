const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Beneficio = db.define('beneficio', {
    codBeneficio:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeMotorista:{
        type: DataTypes.STRING,
        allowNull: false    
    },
    modeloVeiculo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ajudaCustoFixa:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pernoites:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoriaRota:{
        type: DataTypes.ENUM('REGIONAL', 'INTERSTADUAL', 'INTERNACIONAL'),
        allowNull: false
    },  
    valorTotal:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    tablename: 'beneficios',
    timestamps: false
})

module.exports = Beneficio