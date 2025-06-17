import { render } from '@testing-library/react';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <LoginPage>', () => {

    const store = configureStore({
        reducer: {
            auth: authSlice.reducer
        }
    });

    test('debe mostrar el componente correctamente y ser accesible', async () => {
        const { container } = render(
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );
    });

});
