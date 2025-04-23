import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }
  //declarar arreglo
  mensajes:string[]= []
  agregarMensaje(msg:string):void{
    this.mensajes.push(msg);

  }
}
