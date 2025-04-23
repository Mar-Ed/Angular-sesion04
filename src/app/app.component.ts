import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgregarMensajeComponent } from './componentes/agregar-mensaje/agregar-mensaje.component';
import { ListarMensajeComponent } from './componentes/listar-mensaje/listar-mensaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgregarMensajeComponent, ListarMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eduAngular';
}
