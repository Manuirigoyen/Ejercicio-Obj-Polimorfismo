import { Profesor } from './profesor';
import { Estudiante } from './estudiante';
import { Curso } from './curso';

let profeAna = new Profesor("Ana García", "ana@arte.edu");
let profeCarlos = new Profesor("Carlos Núñez", "carlos@arte.edu");
let estudianteLuis = new Estudiante("Luis Pérez", "luis@correo.com");
let estudianteSofía = new Estudiante("Sofía Gómez", "sofia@correo.com");

let cursoPintura = new Curso("Introducción a la Pintura", profeAna);
cursoPintura.agregarParticipante(estudianteLuis);
cursoPintura.agregarParticipante(estudianteSofía);

// Mostrar info
console.log(cursoPintura.listarInformacion());

// Eliminar participante
cursoPintura.eliminarParticipante("luis@correo.com");

// Eliminar responsable
cursoPintura.eliminarResponsable();
console.log("\nTras eliminar al responsable:");
console.log(cursoPintura.listarInformacion());

// Cambiar responsable
cursoPintura.cambiarResponsable(profeCarlos);
console.log("\nTras cambiar al responsable:");
console.log(cursoPintura.listarInformacion());

console.log(profeAna.presentarse()); //Presentar
console.log(estudianteLuis.presentarse()); //Se presenta igual aunque haya sido eliminado, ya que puede ser agregado nuevamente
console.log(cursoPintura.listarInformacion()); //En el curso no se muestra

//Prueba de getters
console.log(cursoPintura.getResponsable());
console.log(cursoPintura.getTitulo());
console.log(profeCarlos.getNombre());
console.log(estudianteSofía.getEmail());