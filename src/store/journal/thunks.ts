import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { AppDispatch, RootState } from "../store"
import { FirebaseDB } from "../../firebase/config";
import { Mensaje, NivelMensaje, Note } from "../../interfaces";
import { addNewEmptyNote, savingNewNote, setActiveNote, setMessagge, setNotes, setSaving, updateNote } from "./journalSlice";
import { uploadFile } from "../../helpers";

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
        try {
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
        } catch (error) {
            const msg:Mensaje = {
                titulo: 'Error al crear nota',
                mensaje: `${error}`,
                nivel: NivelMensaje.error
            };
            dispatch(setMessagge(msg));
        }
    }
}

export const startUpdateNote = (note:Note) => {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        try {
            const { user } = getState().auth;
            if (!user) {
                throw new Error('Usuario no identificado');
            }
            dispatch(setSaving());
            const docRef = doc( FirebaseDB, `${user.uid}/journal/notes/${note.id}` );
            await setDoc(docRef, note, { merge: true });
            dispatch(updateNote(note));
        } catch (error) {
            const msg:Mensaje = {
                titulo: `Error al actualizar nota "${note.head}"`,
                mensaje: `${error}`,
                nivel: NivelMensaje.error
            };
            dispatch(setMessagge(msg));
        }
    }
}

export const startUploadFile = (note: Note, fileList: FileList) => {
    return async (dispatch:AppDispatch, getState: () => RootState) => {
        try {
            const { user } = getState().auth;
            if (!user) {
                throw new Error('Usuario no identificado');
            }
            dispatch(setSaving());
            const fileUploadPromises = [];
            for ( const file  of fileList ) {
                fileUploadPromises.push(uploadFile( file ));
            }
            const photosUrls = await Promise.all(fileUploadPromises);
            note.images = [...note.images, ...photosUrls];
            dispatch(startUpdateNote(note));
        } catch (error) {
            const msg:Mensaje = {
                titulo: `No se logró cargar los ficheros`,
                mensaje: `${error}`,
                nivel: NivelMensaje.error
            };
            dispatch(setMessagge(msg));
        }
    };
}
