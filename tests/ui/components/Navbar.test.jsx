import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/authContext';
import { Navbar } from '../../../src/components/ui/Navbar';


describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        user: {
            logged: true,
            name: 'Juan Carlos'
        }
    }

    beforeEach(() => jest.clearAllMocks() );


    test('debe de mostrar el nombre del usuario', () => {
        
        render(
            <AuthContext.Provider value={ contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter> 
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Juan Carlos') ).toBeTruthy();
        

    });

});


