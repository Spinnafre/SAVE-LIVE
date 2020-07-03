const connection = require('../database/connection')
module.exports = {
    async createInc(req, res) {
        const { title, description, value} = req.body
        /*Informações para autenticacao é bom estar no header
        onde a informação do contexto do cliente está armazenado.
        */
        const id_ong = req.headers.authorization

        const [id]=await connection('incidents').insert({
            title,
            description,
            value,
            id_ong
        })

        return res.json({id})
    },
    async pegarInc(req, res) {
        const { page = 1 } = req.query

        const [count]=await connection('incidents').count()

        console.log(count)
        // PAGINAÇÃO, mostrando 5 casos de cada vez
        const incidents = await connection('incidents')
        .join('ongs','incidents.id_ong','=','ongs.id')
        .limit(5)
        .offset((page-1)*5)
        .select(['incidents.*','ongs.name','ongs.whatsapp','ongs.email','ongs.city','ongs.uf'])

        res.header('X-Total-count',count['count(*)'])

        return res.json(incidents)
    },
    async deletar(req, res) {
        const {id}=req.params
        const id_ong=req.headers.authorization


        const incident = await connection('incidents')
        .where('id',id)
        .select('id_ong')
        .first()

        if(incident.id_ong !== id_ong){
            return res.status(400).json({error:'Operation invalid'})
        }

        await connection('incidents').where('id',id).delete()

        
        console.log(incident)
        

        return res.status(204).send()
    }
}