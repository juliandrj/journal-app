import { act, fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { loginFormData, unauthenticatedState } from '../../fixtures/authFixtures';
import { LoginForm } from '../../../src/interfaces';

const mockStartGoogleSingIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock( '../../../src/store/hooks', () => ({
    useAppDispatch: () => (fn:Function) => fn(),
}) );

jest.mock( '../../../src/store/auth/thunks', () => ({
    startGoogleSingIn: () => mockStartGoogleSingIn,
    startLoginWithEmailPassword: (loginForm: LoginForm) => {
        return () => mockStartLoginWithEmailPassword(loginForm);
    }
}) );

import { LoginPage } from '../../../src/auth/pages/LoginPage';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: unauthenticatedState
    }
});

describe('Pruebas en <LoginPage>', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe mostrar el componente correctamente y ser accesible', () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        expect( screen.getAllByText( 'Login' ).length ).toBeGreaterThanOrEqual(1);
    });

    test('el botón de Google debe llamar a startGoogleSignIn.', async () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        await act( async () => {
            const googleBtn = screen.getByTestId("google-btn");
            fireEvent.click( googleBtn );
        } );
        expect( mockStartGoogleSingIn ).toHaveBeenCalled();
    });
    
    test('el botón de Login debe llamar a startLoginWithEmailPassword.', async () => {
        render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
        await act( async () => {
            const userTxt = screen.getByTestId( 'user-txt' )
            fireEvent.change( userTxt, { target: {name: 'user', value: loginFormData.user} } );
            const pswTxt = screen.getByTestId( 'password-txt' );
            fireEvent.change( pswTxt, { target: {name: 'password', value: loginFormData.password} } );
            const formElement = screen.getByTestId( 'formElement' );
            fireEvent.submit( formElement );
        } );
        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({...loginFormData});
    });

});
