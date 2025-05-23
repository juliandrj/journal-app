import { createSlice } from '@reduxjs/toolkit';
import { JournalState } from '../../interfaces/';

const initialState: JournalState = {
    isSaving: false,
    notes: []
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState: initialState,
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = [...action.payload];
        },
        setSaving: (state, action) => {},
        updateNote: (state, action) => {},
    }
});

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, } = journalSlice.actions;
