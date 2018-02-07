let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/prontodigi');

let PacienteSchema = new Schema({
    name: String,
    senha: String,
    email: String,
    created_at: Date,
    updated_at: Date
});

let Paciente = mongoose.model('Paciente', PacienteSchema);

module.exports = Paciente;