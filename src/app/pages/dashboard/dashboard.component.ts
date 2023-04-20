import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data: any = { // Datos de prueba
    user : {
      name: 'John Doe',
      last_name: 'Doe',
      username: 'johndoe',
      birhtday: '1990-01-01',
      city_birth: 'Bogotá',
    }
  
  }

}
