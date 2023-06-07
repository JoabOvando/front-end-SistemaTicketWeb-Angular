// vuelo.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent {
  vuelos: any[] = [];
  nuevoVuelo: any = null; 

  constructor(private http: HttpClient, private router: Router, private dialog: MatDialog) { }


  ngOnInit() {
    this.obtenerVuelos();
  }

  obtenerVuelos() {

    this.http.get('http://localhost:8080/vuelos').subscribe(
      (response: any) => {
        this.vuelos = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  asignarVuelos() {
    this.router.navigateByUrl('/inservuelo');
  }

  editarVuelo(vuelo: any) {
    // Realiza la solicitud PUT para guardar los cambios
    this.http.put(`http://localhost:8080/vuelos/${vuelo.idVuelo}`, vuelo).subscribe(
      (response: any) => {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '300px',
          data: 'Cambios guardados con éxito'
        });
      
        dialogRef.afterClosed().subscribe(result => {
          console.log('Diálogo cerrado');
        });
      },
      (error: any) => {
        console.error('Error al guardar los cambios:', error);
        // Maneja el error de acuerdo a tus necesidades
      }
    );
  }


  eliminarVuelo(vuelo: any) {
    // Lógica para eliminar vuelo en la base de datos
    this.http.delete(`http://localhost:8080/vuelos/${vuelo.idVuelo}`, vuelo).subscribe(
      () => {
        // Eliminación exitosa, actualiza la lista de vuelos
        const index = this.vuelos.indexOf(vuelo);
        if (index !== -1) {
          this.vuelos.splice(index, 1);
          this.mostrarMensaje("Vuelo eliminado exitosamente");
        }
      },
      (error: any) => {
        console.error(error);
        this.mostrarMensaje("Ocurrió un error al eliminar el vuelo");
      }
    );
  }
  

  mostrarMensaje(mensaje: string, isError: boolean = false) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      data: { mensaje, isError }
    });
  }
  

  
  
}
