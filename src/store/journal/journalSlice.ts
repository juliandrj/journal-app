import { createSlice } from '@reduxjs/toolkit';
import { JournalState, NivelMensaje } from '../../interfaces/';

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
            state.mensaje = undefined;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
            state.mensaje = undefined;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = [...action.payload];
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action) => {
            state.notes = state.notes.map( note => note.id === action.payload.id ? action.payload : note );
            state.active = action.payload;
            state.isSaving = false;
            state.mensaje = {
                titulo: 'Nota actualizada',
                mensaje: `La nota "${action.payload.head}", se ha actualizado.`,
                nivel: NivelMensaje.success
            };
        },
        deleteNote: (state, action) => {
            state.notes = state.notes.filter( note => note.id !== action.payload.id );
            state.active = undefined;
            state.isSaving = false;
            state.mensaje = {
                titulo: 'Nota eliminada',
                mensaje: `La nota "${action.payload.head}", se ha eliminado.`,
                nivel: NivelMensaje.warning
            };
        },
        setMessagge: (state, action) => {
            state.isSaving = false;
            state.mensaje = {
                titulo: action.payload.titulo,
                mensaje: action.payload.mensaje,
                nivel: action.payload.nivel
            };
        },
        clearJournalState: (state) => {
            state.isSaving = initialState.isSaving;
            state.active = initialState.active;
            state.mensaje = initialState.mensaje;
            state.notes = initialState.notes;
        }
    }
});

export const { savingNewNote, addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, setMessagge, clearJournalState, deleteNote, } = journalSlice.actions;
