import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonDatetime, IonLabel, IonItem, IonButton, IonInput, IonList, IonTextarea } from '@ionic/angular/standalone';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonList, IonInput, IonItem, IonButton, IonLabel, IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})

export class NotasPage implements OnInit {

  Min = new Date();
  Notificacion: MyNotificacion = {
    titulo: "",
    descripcion: "",
    fecha : this.CalcularMin()
  }
  constructor() { }

  ngOnInit() {
    this.Limpiar()
  }

  RegistrarNotificacion() {
    console.log(this.Notificacion);
    LocalNotifications.schedule({
      notifications: [
        {
          title: this.Notificacion.titulo,
          body: this.Notificacion.descripcion,
          id: 1,
          schedule: { at: this.Notificacion.fecha },
        }]
    });
    this.Limpiar();
   // this.CalcularMin();

  }
  Limpiar() {
    this.Notificacion = {
      titulo: "",
      descripcion: "",
      fecha: this.CalcularMin()
    }
  }
  CalcularMin() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 2);
    this.Min = now;
    const isoDateString = now.toISOString();
   return  new Date(isoDateString);
  }
}
export interface MyNotificacion {
  titulo: string;
  descripcion: string;
  fecha: Date;

}
