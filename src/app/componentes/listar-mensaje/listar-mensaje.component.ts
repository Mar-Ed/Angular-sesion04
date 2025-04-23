import { Component } from '@angular/core';
import { MensajeService } from '../../servicios/mensaje.service';

@Component({
  selector: 'app-listar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './listar-mensaje.component.html',
  styleUrl: './listar-mensaje.component.css'
})
export class ListarMensajeComponent {
  constructor(public servicioMsg:MensajeService){

  }
}
