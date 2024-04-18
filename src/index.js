const express = require('express');
const mongoose = require('mongoose');
const SubstringRoute = require('./routes/SubstringRoute');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://mongo:27017/culqi',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB: ', err));

// Middleware
app.use(express.json());

// Rutas
app.use('/api', SubstringRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
