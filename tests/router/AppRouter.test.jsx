import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AppRouter } from '../../src/routers/AppRouter';
import { AuthContext } from '../../src/auth/authContext';

jest.mock('animate.css');

describe('Pruebas en <AppRouter />', () => {
    
    test('debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Login').length ).toBe(2)
    });

    test('debe de mostrar el componente de Marvel si está autenticado', () => {
    
        const contextValue = {
            user: {
                logged: true,
                id: 'ABC',
                name: 'Juan Carlos'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );


        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);
    });


});