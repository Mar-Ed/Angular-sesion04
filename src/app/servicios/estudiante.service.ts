import { Injectable } from '@angular/core';
import { Estudiante } from '../modelo/estudiante';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudiantes: Estudiante[] = [];
  constructor() { }
  

  obtenerEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  agregarEstudiante(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante);
  }
}
