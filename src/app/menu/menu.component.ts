import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private http: HttpClient, private router: Router) { }

  buttonClicked(buttonNumber: number) {
    switch (buttonNumber) {
      case 1:
        this.router.navigateByUrl('/persona');
        break;
      case 2:
        this.router.navigateByUrl('/reservacion');
        break;
      case 3:
        this.router.navigateByUrl('/vuelo');
        break;
      case 4:
         this.router.navigateByUrl('/equipaje');
        break;
      default:
        console.log('Botón no reconocido');
        break;
    }
  }
}
