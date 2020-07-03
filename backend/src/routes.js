const express = require('express')
const routes = express.Router()
const { celebrate, Segments, Joi } = require('celebrate');

const ongController = require('./controller/ongController')
const incidentsController = require('./controller/incidentsController')
const ProfileController = require('./controller/ProfileController')
const sessionController = require('./controller/sessionController')

routes.use(express.json())


// Para fazer o login irei usar o Post 
// Note que ele irá simbolizar a criação de uma session

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        whatsapp: Joi.string().required(),
        email: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required()
    })
}), ongController.create)
// routes.get('/ongs',ongController.query )
routes.get('/ongs', ongController.index)

routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), incidentsController.createInc)
routes.get('/incidents', incidentsController.pegarInc)
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), incidentsController.deletar)

routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), sessionController.logar)
// Vai listar os casos de uma ONG específica
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index)

module.exports = routes