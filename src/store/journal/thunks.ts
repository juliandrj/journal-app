import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { AppDispatch, RootState } from "../store"
import { FirebaseDB } from "../../firebase/config";
import { Note } from "../../interfaces";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        dispatch(savingNewNote());
        const { user } = getState().auth;
        const newDoc = doc(collection(FirebaseDB, `${user?.uid}/journal/notes`));
        const emptyNote:Note = {
            id: '',
            head: '',
            body: '',
            images: []
        };
        await setDoc(newDoc, emptyNote);
        emptyNote.id = newDoc.id;
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
                images: data.images
            });
        });
        dispatch(setNotes(notes));
    }
}