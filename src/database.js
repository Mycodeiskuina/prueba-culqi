const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/culqi',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB: ', err));

const substringSchema = new mongoose.Schema({
    s: String,
    words: [String],
    positions: [Number]
});

const Substring = mongoose.model('Substring', substringSchema);

module.exports = Substring;

