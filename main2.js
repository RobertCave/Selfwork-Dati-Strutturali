// The very hard way

let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
  ];
  
  let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio'],
  ];
  
  let frase = ["Un", "Anello", "per", "domarli,", "un", "Anello", "per", "trovarli,", "un", "Anello", "per", "ghermirli", "e", "nel", "buio", "incatenarli."];
  
  const arrays = [array_1, array_2];
  
  function cercaFrase(frase, arrays) {
    for (let i = 0; i < frase.length; i++) {
      let parola = frase[i].toLowerCase(); // Normalizziamo la parola in minuscolo per colpa della stringa iniziale "Un"
      
      for (let j = 0; j < arrays.length; j++) { // per ogni array esistente
        let arrayScelto = arrays[j];
        
        for (let k = 0; k < arrayScelto.length; k++) {
          let subArray = arrayScelto[k]; // array annidato
          
          // Cerchiamo all'interno del subArray
          for (let l = 0; l < subArray.length; l++) {
            let elementoArray = subArray[l];
  
            // Se l'elementoArrayo è un array, controlliamo al suo interno
            if (Array.isArray(elementoArray)) { // siete stati davvero cattivi ad annidare tre array
              for (let m = 0; m < elementoArray.length; m++) {
                if (elementoArray[m].toLowerCase() === parola) {
                  console.log(`La parola "${frase[i]}" si trova in: array_${j + 1}[${k}][${l}][${m}] (subArray annidato).`);
                }
              }
            } else if (elementoArray.toLowerCase() === parola) {
              console.log(`La parola "${frase[i]}" si trova in: array_${j + 1}[${k}][${l}]`);
            }
          }
        } //
      } // for per array_1 e array_2
    } // for per ogni parola della frase
  }
  
  cercaFrase(frase, arrays);
  