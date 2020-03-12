
const db = require("./connection")

const User = db.sequelize.define("users", {
    name: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    }
})

//User.sync({ force: true })

module.exports = User