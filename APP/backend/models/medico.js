let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/prontodigi');

let MedicoSchema = new Schema({
    name: String,
    senha: String,
    email: String,
    created_at: Date,
    updated_at: Date
});

let Medico = mongoose.model('Medico', MedicoSchema);

module.exports = Medico;