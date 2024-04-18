const findSubstring = function(s, words) {
    let wordCount = words.length; // cantidad de palabras
    let wordLength = words[0].length; // longitud de cada palabra
    let substrLength = wordCount * wordLength; // longitud de la subcadena
    let result = []; // arreglo de posiciones

    // contar las apariciones de cada palabra en el arreglo words
    map = new Map(); // mapa de palabras
    for (let i = 0; i < wordCount; i++) {
        if (map.has(words[i])) {
            map.set(words[i], map.get(words[i]) + 1);
        } else {
            map.set(words[i], 1);
        }
    }

    for (let i = 0; i <= s.length - substrLength; i++) {
        let substr = s.substring(i, i + substrLength); // extraer la subcadena de longitud substrLength
        let wordTemp = "";
        let mapTemp = new Map(map); // copiar el mapa de palabras

        for (let j = 0; j < substr.length; j++) {
            wordTemp += substr[j];
            if (wordTemp.length === wordLength) {
                if (mapTemp.has(wordTemp)) { // si la palabra esta en el mapa temporal
                    mapTemp.set(wordTemp, mapTemp.get(wordTemp) - 1); // restar una aparicion
                    if (mapTemp.get(wordTemp) === 0) { // si ya no hay apariciones 
                        mapTemp.delete(wordTemp); // eliminar la palabra del mapa
                    }
                } else {
                    break; // si la palabra no esta en el mapa, salir del ciclo
                }
                wordTemp = ""; // reiniciar la palabra temporal
            }
        }
        
        if (mapTemp.size === 0) {
            result.push(i); // si el mapa temporal esta vacio, agregar la posicion al resultado 
        }
    }
    return result;
};

module.exports = findSubstring;