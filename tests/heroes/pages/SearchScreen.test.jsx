import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { SearchScreen } from '../../../src/components/search/SearchScreen';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



describe('Pruebas en <SearchScreen />', () => {


    beforeEach(() => jest.clearAllMocks() );

    
    test('debe de mostrarse correactamente con valores por defecto', () => {
        
        const { container } =render(
            <MemoryRouter>
                <SearchScreen />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
        
    });

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        ); 
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');
        
        const img = screen.getByRole('img');
        expect( img.src ).toContain('https://res.cloudinary.com/the-kings-company/image/upload/v1658331093/heroes-app/dc-batman_qujtsk.jpg');

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('none');
    });

    test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchScreen />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');
        

    });

    test('debe de llamar el navigate a la pantalla nueva', () => {
        
        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }})
        
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`)

    });


});