import React, { useMemo } from 'react';
import 'animate.css';

import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

/**
 * Este componente es el encargado de listar los heroes en base a la categoria (publisher).
 * @module HeroList
 * @property {publisher} - Es la categoria (Marvel Comics, Dc Comics).
 */
export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] );

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn' >

            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                        />
                ))
            }

        </div>
    );
};