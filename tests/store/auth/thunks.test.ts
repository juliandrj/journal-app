import { starGoogleSingIn } from '../../../src/store/auth/thunks';

describe('Pruebas de Thunks Auth.', () => {
    test('debe invocar starGoogleSingIn.', () => {
        starGoogleSingIn();
    });
});
