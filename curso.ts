import { Profesor } from './profesor';
import { Estudiante } from './estudiante';

export class Curso {
  private titulo: string;
  private responsable: Profesor | null;
  private participantes: Estudiante[];

  constructor(pTitulo: string, pResponsable: Profesor | null) {
    this.titulo = pTitulo;
    this.responsable = pResponsable;
    this.participantes = [];
  }
  agregarParticipante(estudiante: Estudiante): void {
    this.participantes.push(estudiante);
  }

  eliminarParticipante(email: string): boolean {
    let indice = this.participantes.findIndex(e => e.getEmail() === email);
    if (indice !== -1) {
      this.participantes.splice(indice, 1);
      return true;
    }
    return false;
  }

  eliminarResponsable(): void {
    this.responsable = null;
  }

  cambiarResponsable(nuevo: Profesor): void {
    this.responsable = nuevo;
  }

  getResponsable(): Profesor | null {
    return this.responsable;
  }

  getTitulo(): string {
    return this.titulo;
  }

  listarInformacion(): string {
    let responsableInfo = this.responsable
      ? this.responsable.getInfo() 
      : "Sin responsable asignado";

    let infoParticipantes = this.participantes.length > 0
      ? this.participantes.map(p => p.getInfo()).join('\n')
      : "No hay participantes inscritos.";

    return `Curso: ${this.titulo}
Responsable: ${responsableInfo}
Participantes:
${infoParticipantes}`;
  }
}