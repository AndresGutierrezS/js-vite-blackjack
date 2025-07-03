

export const crearCartaHTML = ( carta ) => {
    if ( !carta ) throw new Error('La carta es opbligatoria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    
    return imgCarta;
}