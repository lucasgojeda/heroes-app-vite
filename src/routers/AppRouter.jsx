import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


/**
 * Este componente maneja las rutas "/login" y "/*", en este componente
 * se encuentran colocados los componentes LoginScreen y DashboardRouter.
 * @module AppRouter
 */
export const AppRouter = () => {
    return (
        <>
            {/* <BrowserRouter> */}

            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRouter />
                    </PrivateRoute>
                } />

            </Routes>

            {/* </BrowserRouter> */}
        </>
    );
};