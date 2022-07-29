import React from 'react';

import { HeroList } from '../hero/HeroList';

/**
 * Este componente muestra todos los componentes de la categoria 
 * "DC Comics".
 * @module DcScreen
 */
export const DcScreen = () => {
    return(
        <>
            <h1> DcScreen </h1>
            <hr />
            {
                /**
                 * El siguiente componente muestra los heroes de la categoria
                 * correspondiente.
                 */
            }
            <HeroList publisher={'DC Comics'} />
        </>
    );
};