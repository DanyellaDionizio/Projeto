const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

app.use(bodyParser.json());

app.use('', auth);

app.get('/', (req, res) => {
    res.send({
        msg: 'Bem Vindo a API da ProntoDigi.'
    })
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});