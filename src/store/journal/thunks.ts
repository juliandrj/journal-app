import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { AppDispatch, RootState } from "../store"
import { FirebaseDB } from "../../firebase/config";
import { Note } from "../../interfaces";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        dispatch(savingNewNote());
        const { user } = getState().auth;
        const newDoc = doc(collection(FirebaseDB, `${user?.uid}/journal/notes`));
        const emptyNote:Note = {
            id: '',
            head: '',
            body: '',
            date: new Date().getTime(),
            images: []
        };
        emptyNote.id = newDoc.id;
        await setDoc(newDoc, emptyNote);
        dispatch(addNewEmptyNote(emptyNote));
        dispatch(setActiveNote(emptyNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        const { user } = getState().auth;
        if (!user) {
            throw new Error('Usuario no identificado');
        }
        const collectionRef = collection(FirebaseDB, `${user.uid}/journal/notes`);
        const docs = await getDocs(collectionRef);
        const notes: Note[] = [];
        docs.forEach((doc) => {
            const data = doc.data()
            notes.push({
                id: doc.id,
                head: data.head,
                body: data.body,
                date: data.date,
                images: data.images
            });
        });
        dispatch(setNotes(notes));
    }
}

export const startUpdateNote = (note:Note) => {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        const { user } = getState().auth;
        if (!user) {
            throw new Error('Usuario no identificado');
        }
        dispatch(setSaving(""));
        const docRef = doc( FirebaseDB, `${user.uid}/journal/notes/${note.id}` );
        await setDoc(docRef, note, { merge: true });
        dispatch(updateNote(note));
    }
}
