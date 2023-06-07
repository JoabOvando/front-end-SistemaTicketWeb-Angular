import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Persona {
  idIdentificacion: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  tituloPersona: string;
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: Persona[] = [];
  nuevaPersona: Persona = {
    idIdentificacion: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    tituloPersona: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }
  
  obtenerPersonas(): void {
    const url = 'http://localhost:8080/personas';
    this.http.get<Persona[]>(url)
      .subscribe(
        (response) => {
          this.personas = response;
        },
        (error) => {
          console.error('Error al obtener las personas', error);
        }
      );
  }

  guardarPersona(): void {
    const url = 'http://localhost:8080/personas/';
    this.http.post(url, this.nuevaPersona)
      .subscribe(
        (response) => {
          console.log('Persona guardada exitosamente', response);
          this.obtenerPersonas();
          this.nuevaPersona = {
            idIdentificacion: 0,
            nombre: '',
            apellido: '',
            fechaNacimiento: '',
            lugarNacimiento: '',
            tituloPersona: ''
          };
        },
        (error) => {
          console.error('Error al guardar la persona', error);
        }
      );
  }

  editarPersona(persona: Persona): void {
    // Lógica para editar una persona
  }

  eliminarPersona(persona: Persona): void {
    // Lógica para eliminar una persona
  }
}
