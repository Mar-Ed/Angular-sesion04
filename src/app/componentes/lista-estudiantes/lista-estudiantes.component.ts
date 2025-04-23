import { Component } from '@angular/core';
import { EstudianteService } from '../../servicios/estudiante.service';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [],
  templateUrl: './lista-estudiantes.component.html',
  styleUrl: './lista-estudiantes.component.css'
})
export class ListaEstudiantesComponent {
  constructor(public servicioEstudiante: EstudianteService){}
}
