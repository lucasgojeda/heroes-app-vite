import React from 'react';
import { Link } from 'react-router-dom';

import { heroImages } from '../../data/heroesImages';

import 'animate.css';

/**
 * Este componente es la "card" encargada de mostrar individualmente cada héroe.
 * @module HeroCard
 * @property {id} - Id del héroe.
 * @property {superhero} - Nombre del héroe.
 * @property {publisher} - Categoria del héroe.
 * @property {alter_ego} - Alter ego del héroe.
 * @property {first_appearance} - First appearance del héroe.
 * @property {characters} - Characters del héroe.
 */
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    /**
     * Obtenemos el url de la imagen correspondiente al héroe mediante su "id".
     */
    const imgPath = heroImages.filter(
        e => (e.name === `${id}.jpg`) && e.url
    );


    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={imgPath[0].url} className='card-img' alt={superhero} />
                    </div>
                    <div className='col-8'>

                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {
                                (alter_ego !== characters)
                                && <p className='text-muted'>{characters}</p>
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más...
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};