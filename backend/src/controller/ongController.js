const crypto = require('crypto')
const connection = require('../database/connection')


module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*')

        return res.json(ongs)
    },
    async query(req, res) {
        const { name, city, uf } = req.query
        const ongs = await connection('ongs')
            .where('ongs.name', name)
            .where('ongs.city', city)
            .where('ongs.uf', uf)
            .select('*')
        console.log(name, city, uf)

        return res.json(ongs)
    },
    async create(req, res) {
        const { name, whatsapp, email, city, uf } = req.body
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            whatsapp,
            email,
            city,
            uf
        })

        return res.json({ id })
    }
    
}