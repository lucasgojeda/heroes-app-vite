import { heroes } from "../data/heroes"

/**
 * Esta función busca heroes en base al id.
 * @function
 * @param {String} id - Corresponde al "id" del héroe.
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
export const getHeroById = ( id = '' ) => {
    return heroes.find( hero => hero.id === id );
};