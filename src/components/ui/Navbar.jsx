import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


/**
 * Este componente sirve para que el usuario pueda navegar entre las diferentes 
 * rutas con las que cuenta la aplicación.
 * @module Navbar
 */
export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {

        const action = {
            type: types.logout,
        }

        dispatch(action);

        navigate('/login', {"replace": true});
    }

 
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            
            <Link 
                className='navbar-brand' 
                to='/'
            >
                Associations
            </Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav'>

                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active' : '' ) } 
                        to='/marvel'
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active' : '' ) } 
                        to='/dc'
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active' : '' ) } 
                        to='/search'
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                <span className='nav-item nav-link text-info'>
                    {
                        user.name
                    }
                </span>
                    <button 
                        className='nav-item nav-link btn' 
                        onClick={ handleLogOut }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}