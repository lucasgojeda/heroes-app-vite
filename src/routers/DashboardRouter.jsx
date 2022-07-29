import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Navbar } from '../components/ui/Navbar';

import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from "../components/hero/HeroScreen";


/**
 * Este componente conecta las rutas con los componentes que hacen a la 
 * escencia de la aplicación, es decir aquellos que muestran los datos y 
 * las imagenes de los heroes tanto de "marvel" como de "dc".
 * @module DashboardRouter
 */
export const DashboardRouter = () => {
    return (

        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:id" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>

    );
};