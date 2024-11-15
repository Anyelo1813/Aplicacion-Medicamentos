import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonItem,
  IonMenu,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  standalone: true,
  styleUrls: ['./menu.page.scss'],
  imports: [
    IonItem,
    IonMenu,
    IonHeader,
    IonButton,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    RouterLink,
    IonIcon,
  ],
})
export class MenuPage implements OnInit {
  isDark = true;
  constructor() {}
  async ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDark = prefersDark.matches;
    this.changeTheme();
    prefersDark.addEventListener('change', () => {
      this.isDark = prefersDark.matches;
      this.changeTheme();
    });
  }
  btnThemePush() {
    this.isDark = !this.isDark;
    this.changeTheme();
  }
  changeTheme() {
    document.documentElement.classList.toggle('ion-palette-dark', this.isDark);
  }
}

