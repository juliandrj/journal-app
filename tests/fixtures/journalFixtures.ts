import { JournalState, Note } from "../../src/interfaces";

export const initialJournalState: JournalState = {
        isSaving: false,
        notes: [],
        active: undefined,
        mensaje: undefined,
    };

export const note: Note = {
    id: '1',
    head: 'Note 1',
    body: 'Content 1',
    date: Date.now(),
    images: [],
};