const express = require('express');
const router = express.Router();
var Medico = require('../models/medico');
var Paciente = require('../models/paciente');
const sha256 = require('sha256');

router.post('/login', (req, res) => {
    const { email, senha, tipo } = req.body;

    if (tipo === 1) {
        Medico.find({ email: email }).where('senha').equals(sha256(senha)).exec(function(err, medico) {
            if (err) {
                res.json({
                    status: 400,
                    message: 'Não foi possível carregar o médico.'
                })
            }

            if (medico.length > 0) {
                res.json({
                    status: 200,
                    message: 'Login realizado com sucesso!'
                })
            } else {
                res.json({
                    status: 400,
                    message: 'Houve um erro ao tentar logar!'
                })
            }
        });
    } else {
        Paciente.find({ email: email }).where('senha').equals(sha256(senha)).exec(function(err, paciente) {
            if (err) {
                res.json({
                    status: 400,
                    message: 'Houve um erro ao tentar logar!'
                })
            }

            if (paciente.length > 0) {
                res.json({
                    status: 200,
                    message: 'Login realizado com sucesso!'
                })
            } else {
                res.json({
                    status: 400,
                    message: 'Houve um erro ao tentar logar!'
                })
            }
        });
    }
});

router.post('/cadastrar', (req, res) => {
    
    const { nome, senha, email, tipo } = req.body;

    if ( nome === '' ){
        res.send({
            status: 400,
            message: 'Campo nome não foi preenchido'
        })
    }

    if ( email === '' ){
        res.send({
            status: 400,
            message: 'Campo e-mail não foi preenchido'
        })
    }

    if ( senha === '' ){
        res.send({
            status: 400,
            message: 'Campo senha não foi preenchido'
        })
    }

    if (tipo === 1) {
        Medico.findOne({ email: email }, function(err, medico) {
            if (err) {
                res.json({
                    status: 400,
                    message: 'Houve um erro ao carregar um médico!'
                })
            }

            if (medico == null) {
                var newMedico = new Medico({
                    name: nome,
                    senha: sha256(senha),
                    email: email
                });

                newMedico.save(function(err) {
                    if (err) {
                        res.json({
                            status: 400,
                            message: 'Houve um erro ao cadastrar novo médico!'
                        })
                    } else {
                        res.json({
                            status: 200,
                            message: 'Médico cadastrado com sucesso!'
                        });
                    }
                })
            } else {
                res.json({
                    status: 200,
                    message: 'Já existe um médico com esse e-mail!'
                })
            }
        })
    } else {
        Paciente.findOne({ email: email }, function(err, paciente) {
            if (err) {
                res.json({
                    status: 400,
                    message: 'Houve um erro ao carregar um paciente!'
                })
            }

            if (paciente == null) {
                var newPaciente = new Paciente({
                    name: nome,
                    senha: sha256(senha),
                    email: email
                });

                newPaciente.save(function(err) {
                    if (err) {
                        res.json({
                            status: 400,
                            message: 'Houve um erro ao cadastrar novo paciente!'
                        })
                    } else {
                        res.json({
                            status: 200,
                            message: 'Paciente cadastrado com sucesso!'
                        });
                    }
                })
            } else {
                res.json({
                    status: 200,
                    message: 'Já existe um paciente com esse e-mail!'
                })
            }
        })
    }
});

module.exports = router;