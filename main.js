// Selfwork Dati Strutturali
// Dato il seguente array mischiato e confuso:


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
      [['domarli,', 'passare'], 'buio']
    ];




    // Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“

    // HINT
    
    //     Non tutte le parole sono necessarie per la frase;
    //     Occhio agli array annidati




    // "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“
    // The easy way
    console.log(`${array_1[0][0]} ${array_1[1][0] } ${array_1[0][1]} ${array_2[4][0][0]} ${array_1[0][1]} ${array_1[0][0]} ${array_1[1][0] } ${array_1[0][1]} ${array_1[1][1]} ${array_1[0][0]} ${array_1[1][0] } ${array_1[0][1]} ${array_1[2][0]} ${array_1[2][1]} ${array_2[3][0]} ${array_2[4][1]} ${array_1[0][2]} `);

