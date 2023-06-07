import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    const nombreUsuario = this.email;
    const contraseña = this.password;

    this.http.get(`http://localhost:8080/usuarios/${nombreUsuario}/${contraseña}`)
      .subscribe(response => {
        if (response === 1) {
          //this.mensaje = 'Inicio de sesion exitoso';
          this.router.navigateByUrl('/menu');

        } else {
          this.mensaje = 'Credenciales inválidas';
        }
      }, error => {
        console.error(error);
        this.mensaje = 'Ocurrió un error al procesar la solicitud';
      });
  }
}
