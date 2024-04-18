const express = require('express');
const bodyParser = require('body-parser'); // Parsear el body de la petición

const app = express();
const PORT = 3000;

Substring = require('./database'); // Importar el modelo Substring

const findSubstring = require('./ejercicio1_v1'); // Importar la función findSubstring

app.use(bodyParser.json());

app.post('/ejercicio1', async (req, res) => { // Ruta para el ejercicio 1
    const { s, words } = req.body;

    // Validar la entrada
    if (!s || !words || words.length === 0) { // 
        return res.status(400).json({ code: 400, error: 'Entrada no válida' });
    }

    // Encontrar las posiciones
    const positions = findSubstring(s, words);

    try {
        const substring = new Substring({
            s: s,
            words: words,
            positions: positions
        });

        const insertResult = await substring.save(); // Guardar los datos en MongoDB

        res.status(200).json({ message: 'Datos guardados en MongoDB', data: insertResult });
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar datos en MongoDB', error: error.message});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`);
});
