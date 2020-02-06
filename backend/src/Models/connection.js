
const Sequelize = require("sequelize")

//Conexão com banco de dados
const sequelize = new Sequelize("alive_companydg", "root", "", {
    host: 3306,
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}