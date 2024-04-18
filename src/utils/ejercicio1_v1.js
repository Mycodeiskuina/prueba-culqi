const findSubstring = function(s, words) {
    let wordCount = words.length; // cantidad de palabras
    let wordLength = words[0].length; // longitud de cada palabra
    let substrLength = wordCount * wordLength; // longitud de la subcadena
    let result = []; // arreglo de posiciones

    for (let i = 0; i <= s.length - substrLength; i++) {
        let substr = s.substring(i, i + substrLength); // extraer la subcadena de longitud substrLength
        let verifiedWords = []; // arreglo de palabras verificadas
        let wordTemp = ""; // palabra temporal

        for (let j = 0; j < substr.length; j++) {
            wordTemp += substr[j]; 
            if (wordTemp.length === wordLength) {
                verifiedWords.push(wordTemp); // agregar la palabra al arreglo de palabras verificadas
                wordTemp = ""; // reiniciar la palabra temporal
            }
        }
        // si las palabras verificadas son iguales a las palabras del arreglo words luego de ordenarlas
        if (verifiedWords.sort().join("") === words.sort().join("")) {
            result.push(i);
        }
    }
    return result;
};

module.exports = findSubstring;