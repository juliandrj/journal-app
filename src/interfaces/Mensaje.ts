export enum NivelMensaje {
    success = 'success',
    error = 'error',
    warning = 'warning',
    info = 'info',
    question = 'question'
}

export interface Mensaje {
    nivel: NivelMensaje;
    titulo: string;
    mensaje: string;
}
