import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgregarMensajeComponent } from './componentes/agregar-mensaje/agregar-mensaje.component';
import { ListarMensajeComponent } from './componentes/listar-mensaje/listar-mensaje.component';
import { ListaEstudiantesComponent } from './componentes/lista-estudiantes/lista-estudiantes.component';
import { AgregarEstudianteComponent } from './componentes/agregar-estudiante/agregar-estudiante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgregarMensajeComponent, ListarMensajeComponent, ListaEstudiantesComponent, AgregarEstudianteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eduAngular';
}
