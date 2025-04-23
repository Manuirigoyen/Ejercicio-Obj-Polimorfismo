import { Persona } from './persona';

export class Estudiante extends Persona {
  constructor(pNombre: string, pEmail: string) {
    super(pNombre, pEmail);  
  }

  presentarse(): string {
    return `Hola, soy el estudiante ${this.nombre}.`;
  }
}
