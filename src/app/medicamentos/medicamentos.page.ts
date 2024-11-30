import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonLabel
} from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    FormsModule,
    CommonModule,
    IonMenuButton,
    IonLabel,
  ],
})
export class MedicamentosPage implements OnInit {
  public medicamentos: IMedicamento[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.CargarDaTOS();
  }
  CargarDaTOS() {
    this.http
      .get<IMedicamento[]>('./../../assets/data/medicamentos.json')
      .subscribe((result) => {
        this.medicamentos = result;
        console.log(this.medicamentos);

      });

    this.medicamentos.forEach((element) => {
      console.log(element.nombre);
    });
  }
}

export interface IMedicamento {
  nombre: string;
  descripcion: string;
  imagen: string;
  como_tomar: string;
  cuando_tomar: string;
}
