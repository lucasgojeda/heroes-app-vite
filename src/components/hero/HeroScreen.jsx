import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';

import { getHeroById } from '../../selectors/getHeroeById';

import { heroImages } from '../../data/heroesImages';


/**
 * Esta vista se encarga de mostrar individualmente cada héroe 
 * en su propia card.
 * @module HeroScreen
 */
export const HeroScreen = () => {
    
    /**
     * Se extrae el id del héroe desde los parametros.
     */
    const { id } = useParams();

    /**
     * Obtenemos los heroes que logren hacer match con el "id".
     */
    const hero = useMemo( () => getHeroById(id), [id] );

    const { 
            alter_ego,
            superhero,
            publisher,
            first_appearance,
            characters 
    } = hero;

    if( !hero ) {
        return <Navigate to='/' />
    };

    /**
     * En base al "id" del héroes obtenemos el url de la imagen 
     * que corresponda.
     */
    const imgPath = heroImages.filter(
        e => (e.name === `${id}.jpg`) && e.url
    );


    const navigate = useNavigate();

    const handleReturn = () => {

        navigate( -1 );
    }

    return(
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                src={imgPath[0].url} 
                alt={superhero}
                className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
            <div className='col-8 animate__animated animate__fadeInLeft'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item' > <b>Alter ego:</b> {alter_ego} </li>
                    <li className='list-group-item' > <b>Publisher:</b> {publisher} </li>
                    <li className='list-group-item' > <b>First appearance:</b> {first_appearance} </li>
                </ul>

                <h5 className='mt-3' >Characters</h5>
                <p> {characters} </p>

                <button
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Back
                </button>
            </div>
        </div>
    );
};