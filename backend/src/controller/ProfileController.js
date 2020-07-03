const connection = require('../database/connection')
module.exports={
    async index(req, res) {

        const id_ong = req.headers.authorization

        const incident = await connection('incidents')
            .where('id_ong', id_ong)
            .select('*')

        return res.json(incident)
    }
}