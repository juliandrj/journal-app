import { signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth';
import { startGoogleSingIn } from '../../../src/store/auth/thunks';
import { demoUser, errorLogin, userCredential } from '../../fixtures/authFixtures';

describe('Pruebas de Thunks Auth.', () => {
    const dispatch = jest.fn();
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe invocar starGoogleSingIn (login ok).', async () => {
        const signInWithGoogleMock = signInWithGoogle as jest.MockedFunction<typeof signInWithGoogle>;
        signInWithGoogleMock.mockResolvedValue(userCredential);
        await startGoogleSingIn()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(demoUser) );
    });

    test('debe invocar starGoogleSingIn (login fail).', async () => {
        const signInWithGoogleMock = signInWithGoogle as jest.MockedFunction<typeof signInWithGoogle>;
        signInWithGoogleMock.mockImplementation(() => Promise.reject(undefined));
        await startGoogleSingIn()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout(undefined) );
    });
});
