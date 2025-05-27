import { Mensaje, Note } from "./";

export interface JournalState {
    isSaving: boolean;
    mensaje?: Mensaje
    notes: Note[];
    active?: Note;
}