import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(private alerta: AlertController) { }

    // Controla los mensajes y el nÃºmero de intentos
    onClick() {
      this.intentos++;
      if (this.numero == this.adivina) {
        this.acierto = true;
        console.log("Has acertado");
        this.mensaje = "Enhorabuena. Has acertado el número secreto";
      } else if (this.numero < this.adivina) {
        console.log("Introduce un número mayor");
        this.mensaje = "Introduce un número mayor";
      } else {
        console.log("Introduce un número menor");
        this.mensaje = "Introduce un número menor";
      }
    }

    // Controla si el numero introducido es válido
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
      this.numero = 0;
      this.intentos = 0;
      this.acierto = false;
      this.mensaje = "";
      this.adivina = Math.floor(Math.random() * 101);
    }

    async presentarAlerta() {
      const alert = await this.alerta.create ({
        cssClass: 'my-custom-class',
        header: '¿Nuevo juego?',
        buttons: [
          {
            text: 'Cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
              this.ngOnInit();
          }
      }
    ]
  });
  await alert.present();
  }

}
