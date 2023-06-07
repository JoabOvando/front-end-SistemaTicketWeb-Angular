import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-inservuelo',
  templateUrl: './inservuelo.component.html',
  styleUrls: ['./inservuelo.component.css']
})
export class InservueloComponent {
  nuevoVuelo: any = {};
  dialog: any;

  constructor(private http: HttpClient) {}

  mostrarMensaje(mensaje: string, isError: boolean = false) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: { mensaje, isError }
    });
  }

  guardarVuelo() {
    const url = 'http://localhost:8080/vuelos/';
    this.http.post(url, this.nuevoVuelo)
      .subscribe(
        (response) => {
          alert('Registro guardado con exito.');
        },
        (error) => {
          alert('Error al insertar');
          // Manejar el error adecuadamente
        }
      );
  }

  
}