import { heroes } from "../data/heroes"


/**
 * Esta función busca heroes en base al name.
 * @function
 * @param {String} name - Corresponde al "superhero" del héroe.
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
export const getHeroesByName = ( name =  '' ) => {

    if (name.length === 0){
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name));
};