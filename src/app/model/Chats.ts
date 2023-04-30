export class Chats {
  id: number = 0;
  mensaje_estudiante: string = '';
  mensaje_tutor: string = '';
  fecha_envio: Date = new Date(Date.now());
  fecha_recepcion: Date = new Date(Date.now());
}
