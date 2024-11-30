import { Component, OnInit } from '@angular/core';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonLabel, IonMenuButton } from '@ionic/angular/standalone';


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

  }


}
