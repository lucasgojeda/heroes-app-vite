import React from 'react';

import { HeroList } from '../hero/HeroList';

/**
 * Este componente muestra todos los componentes de la categoria 
 * "Marvel Comics".
 * @module MarvelScreen
 */
export const MarvelScreen = () => {
    return (
        <>
            <h1> MarvelScreen </h1>
            <hr />
            {
                /**
                 * El siguiente componente muestra los heroes de la categoria
                 * correspondiente.
                 */
            }
            <HeroList publisher={'Marvel Comics'} />
        </>
    );
};