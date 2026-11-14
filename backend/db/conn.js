const { Sequelize } = require("sequelize")

const db = new Sequelize("db_reembolso", "root", "root", {
    port: 3306,
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db