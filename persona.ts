export class Persona {
    protected nombre: string;
    protected email: string;
  
    constructor(pNombre: string, pEmail: string) {
      this.nombre = pNombre;
      this.email = pEmail;
    }
  
    presentarse(): string {
      return `Hola, soy ${this.nombre}.`;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getInfo(): string {
      return `${this.nombre} (${this.email})`; 
    }
  }
  