import { Component } from '@angular/core';
import { EstudianteService } from '../../servicios/estudiante.service';
import { Estudiante } from '../../modelo/estudiante';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-estudiante',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-estudiante.component.html',
  styleUrl: './agregar-estudiante.component.css'
})
export class AgregarEstudianteComponent {

  constructor(public servicioEstdnt: EstudianteService){

  }
  //variable
  estudiante:Estudiante = {nombre:"",apellido:"",edad:0, carrera:"", email:""};
  addEstudiante(){
    this.servicioEstdnt.agregarEstudiante(this.estudiante);
  }
}
