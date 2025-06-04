import { env } from "../env";
import { CloudinaryResponse } from "../interfaces";

export const uploadFile = async (file:File) => {
    const url = `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUDNAME}/${env.CLOUDINARY_RESOURCE_TYPE}/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', env.CLOUDINARY_UPLOAD_PRESET);
    const resp = await fetch( url, {
        method: 'POST',
        body: formData
    });
    if (!resp.ok) {
        throw new Error("No se logró cargar el fichero.");
    }
    const result: CloudinaryResponse = await resp.json();
    return result.secure_url;
};
