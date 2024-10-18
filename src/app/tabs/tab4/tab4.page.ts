import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  adivina!: number;
  numero!: number;
  acierto: boolean = false;
  mensaje: string = "";
  desactivado: boolean = true;
  intentos: number = 0;

  constructor() { }

    // Controla los mensajes y el nÃºmero de intentos
    onClick() {
      this.intentos++;
      if (this.numero == this.adivina) {
        this.acierto = true;
        console.log("Has acertado");
        this.mensaje = "Has acertado";
      } else if (this.numero < this.adivina) {
        console.log("Introduce un número mayor");
        this.mensaje = "Introduce un número mayor";
      } else {
        console.log("Introduce un número menor");
        this.mensaje = "Introduce un número menor";
      }
    }

    // Controla si el numero introducido es vÃ¡lido
    comprobarDato() {
      if (this.numero > 100 || this.numero < 0) {
        console.log("Introduce un número entre 0 y 100");
        this.mensaje = "Introduce un número entre 0 y 100";
        this.desactivado = true;
      } else {
        console.log("Número OK");
        this.mensaje = "";
        this.desactivado = false;
      }
    }

    // Genera el primer numero a adivinar
    ngOnInit() {
      this.adivina = Math.floor(Math.random() * 101);
    }

}
