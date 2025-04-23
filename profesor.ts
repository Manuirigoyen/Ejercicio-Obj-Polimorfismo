import { Persona } from './persona';

export class Profesor extends Persona {
  constructor(pNombre: string, pEmail: string) {
    super(pNombre, pEmail);  
  }

  presentarse(): string {
    return `Hola, soy el profesor/a ${this.nombre}.`;
  }
}
