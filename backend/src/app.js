const express=require('express')
const routes=require('./routes')
const port = 3333
const { errors } = require('celebrate');
const cors = require('cors')
const app=express()

app.use(express.json())
app.use(cors())

app.use(routes)
// app.listen(port, (error) => {
//     console.log(`rodando em http://localhost:${port}`)
// })
app.use(errors());
module.exports = app;

