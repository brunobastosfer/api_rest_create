const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const config = require('config')

const roteador = require('./rotas/fornecedores')

app.use('/api/fornecedores', roteador)
app.use(bodyParser.json());

app.listen(config.get('api.porta'), () => console.log('Rodando!'))