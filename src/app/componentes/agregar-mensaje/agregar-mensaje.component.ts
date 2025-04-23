import { Component } from '@angular/core';
import { MensajeService } from '../../servicios/mensaje.service';

@Component({
  selector: 'app-agregar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './agregar-mensaje.component.html',
  styleUrl: './agregar-mensaje.component.css'
})
export class AgregarMensajeComponent {

  constructor(private servicioMsg: MensajeService){

  }
  //variable
  msg:string=""
  addMensaje(){
    //ingresa mensaje al metodo del servicio
    this.servicioMsg.agregarMensaje(this.msg);
  }
}
