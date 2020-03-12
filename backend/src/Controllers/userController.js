
const User = require("../Models/User")

module.exports = {

    async store(req, res) {

        const { name, email, telefone } = req.query


        let usuario = await User.create({
            name,
            email,
            telefone
        })

        //res.redirect("")

        return res.json(usuario)
        
    }

}