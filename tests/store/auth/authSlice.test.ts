import { authenticatedState, demoUser, initialAuthState, sesionFinalizadaMsg, unauthenticatedState } from '../../fixtures';
import { authSlice, login, logout } from './../../../src/store/auth/authSlice';

describe('Pruebas en el authSlice', () => {
    test('debe regresar el estado inicial y llamarse "auth"', () => {
        const state = authSlice.reducer( initialAuthState, {type: 'string'} );
        expect( state ).toEqual(initialAuthState);
        expect( authSlice.name ).toBe("auth");
    });
    test('debe realizar la autenticación', () => {
        const state = authSlice.reducer( initialAuthState, login(demoUser) );
        expect( state ).toEqual( authenticatedState );
    });
    test('debe realizar el logout', () => {
        const state = authSlice.reducer( initialAuthState, logout(sesionFinalizadaMsg) );
        expect( state ).toEqual( unauthenticatedState );
    });
});
