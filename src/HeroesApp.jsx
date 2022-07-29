import React, { useEffect, useReducer } from 'react';

import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

/**
 * Esta función regresa el user guardado en el localStorage si es que este existe,
 * de no existir entonces regresa "{ logged: false }", el cuál será guardado en 
 * el context como valor inicial del "user" en el AuthContext.
 */
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

/**
 * En este componente encontramos el AppRouter y también el AuthContext.
 * @module HeroesApp
 */
export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init );


    /**
     * Con el siguiente useEffect agregamos los datos del usuario en el localStorage,
     * en caso de que dicho usuario exista.
     */
    useEffect( () => {
        if(!user) return;

        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return(
        <AuthContext.Provider value={{
            user,
            dispatch
        }} >
            <AppRouter />
        </AuthContext.Provider>
    );
};