import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonLabel, IonMenuButton } from '@ionic/angular/standalone';
import { LocalNotifications } from '@capacitor/local-notifications';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonLabel, IonMenuButton],
})
export class HomePage implements OnInit {
  constructor() { }
  onClick() {

  }
  ngOnInit(): void {
    console.log("Iniciando");
    LocalNotifications.schedule({
      notifications: [
        {
          title: "Título de la notificación",
          body: "Este es el cuerpo de la notificación.",
          id: 1,
          schedule: { at: new Date(new Date().getTime() + 1000 * 5) }, // Notificación después de 5 segundos
        }]
    });
  }


}
