import { JournalState, Mensaje, NivelMensaje, Note } from '../../../src/interfaces';
import { addNewEmptyNote, clearJournalState, deleteNote, journalSlice, savingNewNote, setActiveNote, setMessagge, setNotes, setSaving, updateNote } from '../../../src/store/journal/journalSlice';
import { initialJournalState, note } from '../../fixtures';

describe('Acciones del journalSlice', () => {

    const { reducer } = journalSlice;

	it('debe establecer isSaving a true con savingNewNote', () => {
		const state = reducer(initialJournalState, savingNewNote());
		expect(state.isSaving).toBe(true);
	});

	it('debe añadir una nueva nota vacía y poner isSaving en false con addNewEmptyNote', () => {
		const state = reducer({ ...initialJournalState, isSaving: true }, addNewEmptyNote(note));
		expect(state.notes).toContainEqual(note);
		expect(state.isSaving).toBe(false);
	});

	it('debe establecer una nota activa y limpiar el mensaje con setActiveNote', () => {
		const state = reducer(initialJournalState, setActiveNote(note));
		expect(state.active).toEqual(note);
		expect(state.mensaje).toBeUndefined();
	});

	it('debe establecer la lista de notas con setNotes', () => {
		const notes = [note];
		const state = reducer(initialJournalState, setNotes(notes));
		expect(state.notes).toEqual(notes);
	});

	it('debe activar isSaving y limpiar el mensaje con setSaving', () => {
		const state = reducer(initialJournalState, setSaving());
		expect(state.isSaving).toBe(true);
		expect(state.mensaje).toBeUndefined();
	});

	it('debe actualizar una nota existente con updateNote', () => {
		const updatedNote = { ...note, head: 'Título Actualizado' };
		const state = reducer({ ...initialJournalState, notes: [note], isSaving: true }, updateNote(updatedNote));
		expect(state.notes[0].head).toBe('Título Actualizado');
		expect(state.isSaving).toBe(false);
	});

	it('debe establecer el mensaje con setMessagge', () => {
		const mensaje: Mensaje = {
			nivel: NivelMensaje.success,
			titulo: 'Éxito',
			mensaje: 'Guardado correctamente'
		};
		const state = reducer(initialJournalState, setMessagge(mensaje));
		expect(state.mensaje).toEqual(mensaje);
	});

	it('debe limpiar el estado con clearJournalState', () => {
		const stateWithData: JournalState = {
			notes: [note],
			active: note,
			isSaving: true,
			mensaje: {
				nivel: NivelMensaje.error,
				titulo: 'Error',
				mensaje: 'Ocurrió un error'
			},
		};
		const state = reducer(stateWithData, clearJournalState());
		expect(state).toEqual(initialJournalState);
	});

	it('debe eliminar la nota activa con deleteNote', () => {
		const stateWithData: JournalState = {
			...initialJournalState,
			notes: [note],
			active: note,
		};
		const state = reducer(stateWithData, deleteNote(note));
		expect(state.notes).toHaveLength(0);
		expect(state.active).toBeUndefined();
	});
});