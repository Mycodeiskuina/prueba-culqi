const Substring = require('../models/SubstringModel');

const findSubstring = require('../utils/ejercicio1_v1');


// obtener los datos guardados en MongoDB
const getSubstring = async (res) => {
    try {
        const substrings = await Substring.find();
        res.status(200).json({ data: substrings });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos de MongoDB', error: error.message });
    }
}

// guardar los datos en MongoDB
const createSubstring = async (req, res) => {
    const { s, words } = req.body;

    // Validar la entrada
    if (!s || !words || words.length === 0) {
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
}

module.exports =  { createSubstring , getSubstring };