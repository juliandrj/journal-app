import { CollectionReference, DocumentReference } from "firebase/firestore/lite";
import { JournalState, Note } from "../../src/interfaces";
import { RootState } from "../../src/store/store";
import { authenticatedState } from "./authFixtures";
import { FirebaseDB } from "../../src/firebase/firebaseConfig";

export const initialJournalState: JournalState = {
    isSaving: false,
    notes: [],
    active: undefined,
    mensaje: undefined,
};

export const emptyNote: Note = {
    id: '',
    head: '',
    body: '',
    date: 0,
    images: [],
};

export const note: Note = {
    id: '1',
    head: 'Note 1',
    body: 'Content 1',
    date: Date.now(),
    images: [],
};

export const journalStateWithData: JournalState = {
    ...initialJournalState,
    notes: [note],
    active: note,
};

export const rootState: RootState = {
    auth: authenticatedState,
    journal: journalStateWithData
};

export const documentReferenceMock: DocumentReference = {
    converter: null,
    firestore: FirebaseDB,
    id: 'abcdefgh',
    parent: {} as CollectionReference,
    path: '',
    type: 'document',
    withConverter: jest.fn()
};
