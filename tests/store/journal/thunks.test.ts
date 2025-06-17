import { startNewNote } from './../../../src/store/journal/thunks';
import { documentReferenceMock, emptyNote, rootState } from '../../fixtures';
import { doc } from 'firebase/firestore/lite';
import { addNewEmptyNote, savingNewNote, setActiveNote } from '../../../src/store/journal';
import { Note } from '../../../src/interfaces';

describe('Pruebas de Journal Thunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeAll(() => jest.clearAllMocks());

    test('startNewNote debe crear una nota nueva en blanco', async () => {
        const newEmptyNote: Note = {
            ...emptyNote,
            id: expect.any( String ),
            date: expect.any( Number )
        };
        const docMock = doc as jest.MockedFunction<typeof doc>;
        getState.mockReturnValue(rootState);
        docMock.mockReturnValue(documentReferenceMock);
        await startNewNote()(dispatch, getState);
        expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote( newEmptyNote ) );
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote( newEmptyNote ) );
    });
})