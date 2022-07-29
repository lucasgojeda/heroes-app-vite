import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


/**
 * Este componente convierte rutas comunes en rutas privadas, logrando que 
 * solo aquellos usuarios que hayan iniciado sesión puedan acceder a los componentes 
 * que este componentes proteje.
 * Para usar este componente simplemente debemos ir a nuestro archivo que maneja las rutas 
 * (ejemplo: AppRouter) y envolver la ruta que deseamos proteger con este componente.
 * @module PrivateRoute
 */
export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    
    const location = useLocation();

    localStorage.setItem('lastPath', `${location.pathname}${ location.search }` );

    return user.logged ? children : <Navigate to="/login" />
};