
const User = require("../Models/User")

module.exports = {

    async store(req, res) {

        const { name, email } = req.query


        let usuario = await User.create({
            name,
            email
        })

        //res.redirect("")

        return res.json(usuario)
        
    }

}