import _ from 'underscore';

export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta === 0 ) throw new Error('TiposDeCarta es obligatorio');
    if ( !tiposEspeciales ) throw new Error('TiposEspeciales es obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}