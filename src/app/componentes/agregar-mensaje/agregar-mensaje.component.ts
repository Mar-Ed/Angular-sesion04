import { Component } from '@angular/core';
import { MensajeService } from '../../servicios/mensaje.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-mensaje',
  standalone: true,
  imports: [FormsModule], //para utilizar formularios
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
