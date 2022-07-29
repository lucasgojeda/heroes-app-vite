import { heroes } from "../data/heroes"


/**
 * Esta función busca heroes en base a la categoria.
 * @function
 * @param {String} publisher - Corresponde al "publisher" del héroe.
 * @returns {Object}
 * @example {
        'id': 'dc-batman',
        'superhero':'Batman', 
        'publisher':'DC Comics', 
        'alter_ego':'Bruce Wayne',
        'first_appearance':'Detective Comics #27',
        'characters':'Bruce Wayne'
    }
 */
export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['Marvel Comics','DC Comics']
    if ( !validPublishers.includes(publisher) ){
        throw new Error(`${ publisher } is not a valid publisher `)
    };

    return heroes.filter( hero => hero.publisher === publisher );
};