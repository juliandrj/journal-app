import { Note } from "./Note";

export interface JournalState {
    isSaving: boolean;
    messageSaved?: string;
    notes: Note[];
    active?: Note;
}