import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


/**
 * Este componente es aquel mediante el cuál el usuario podrá iniciar sesión en la aplicación.
 * @module LoginScreen
 */
export const LoginScreen = () => {

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);


    /**
     * Esta función realiza el login del usuario con valores determinados y además
     * el ultimo path en el cuál el usuario se encontró antes de salir de la app
     * para llevar al usuario a ese path en el momento que la sesión inicie.
     */
    const handleLogin = () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Lucas temporal'
            }
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath' || '/');
        
        navigate(lastPath, {
            replace: true
        });
    }

    return(
        <div className='container mt-5'>
            <h1> Login </h1>
            <hr />

            <button 
                className='bnt btn-primary' 
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};