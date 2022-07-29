import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";


/**
 * Este componente convierte rutas comunes en rutas públicas, logrando que 
 * solo aquellos usuarios que no hayan iniciado sesión puedan acceder a los componentes 
 * que este componentes proteje.
 * Para usar este componente simplemente debemos ir a nuestro archivo que maneja las rutas 
 * (ejemplo: AppRouter) y envolver la ruta que deseamos proteger con este componente.
 * @module PublicRoute
 */
export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);

    return !user.logged ? children : <Navigate to="/marvel" />
};