import { logoutFirebase, registerUserWithEmailPassword, signInWithEmailPassword, signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth';
import { startGoogleSingIn, startLoginWithEmailPassword, startLogout, startWithEmailPassword } from '../../../src/store/auth/thunks';
import { clearJournalState } from '../../../src/store/journal';
import { demoUser, loginFormData, registerFormData, userCredential } from '../../fixtures/authFixtures';

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

    test('debe invocar registerUserWithEmailPassword - OK', async () => {
        const registerUserWithEmailPasswordMock = registerUserWithEmailPassword as jest.MockedFunction<typeof registerUserWithEmailPassword>;
        registerUserWithEmailPasswordMock.mockResolvedValue(userCredential);
        await startWithEmailPassword( registerFormData )( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(demoUser) );
    });

    test('debe invocar registerUserWithEmailPassword - FAIL', async () => {
        const registerUserWithEmailPasswordMock = registerUserWithEmailPassword as jest.MockedFunction<typeof registerUserWithEmailPassword>;
        registerUserWithEmailPasswordMock.mockRejectedValue(undefined);
        await startWithEmailPassword( registerFormData )( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout(undefined) );
    });

    test('debe invocar signInWithEmailPassword - OK', async () => {
        const signInWithEmailPasswordMock = signInWithEmailPassword as jest.MockedFunction<typeof signInWithEmailPassword>;
        signInWithEmailPasswordMock.mockResolvedValue(userCredential);
        await startLoginWithEmailPassword( loginFormData )( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(demoUser) );
    });
    
    test('debe invocar signInWithEmailPassword - FAIL', async () => {
        const signInWithEmailPasswordMock = signInWithEmailPassword as jest.MockedFunction<typeof signInWithEmailPassword>;
        signInWithEmailPasswordMock.mockRejectedValue(undefined);
        await startLoginWithEmailPassword( loginFormData )( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout(undefined) );
    });

    test('debe invocar logoutFirebase - OK', async () => {
        const logoutFirebaseMock = logoutFirebase as jest.MockedFunction<typeof logoutFirebase>;
        await startLogout()( dispatch );
        expect( logoutFirebaseMock ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearJournalState() );
        expect( dispatch ).toHaveBeenCalledWith( logout("Sesión finalizada.") );
    });
});
