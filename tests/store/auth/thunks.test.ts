import { starGoogleSingIn } from '../../../src/store/auth/thunks';

jest.mock('../../../src/firebase/providers');

describe('Pruebas de Thunks Auth.', () => {
    test('debe invocar starGoogleSingIn.', () => {
        starGoogleSingIn();
    });
});
