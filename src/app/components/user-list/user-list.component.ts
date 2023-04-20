import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(){

  }
  users: any[] = [
    {
        "id": "64408a20c1cdbee2aa183999",
        "name": "Juan",
        "last_name": "Perez",
        "username": "juan",
        "birthday": "2022-04-19T12:00:00.000+00:00",
        "city_birth": "Bogota,Colombia",
        "credentials": [
            "64408a1fc1cdbee2aa183951"
        ]
    },
    {
        "id": "64408a20c1cdbee2aa18399a",
        "name": "Jhon",
        "last_name": "Ramirez",
        "username": "jhon",
        "birthday": "2022-04-19T12:00:00.000+00:00",
        "city_birth": "Jerusalem,Cucuta",
        "credentials": [
            "64408a1fc1cdbee2aa183950"
        ]
    },
    {
        "id": "64408a20c1cdbee2aa18399c",
        "name": "Sebastian",
        "last_name": "Vergara",
        "username": "sebas",
        "birthday": "2003-04-05T12:00:00.000+00:00",
        "city_birth": "Jerusalem,Cucuta",
        "credentials": [
            "64408a1fc1cdbee2aa183953"
        ]
    },
    {
        "id": "64408a20c1cdbee2aa18399b",
        "name": "David",
        "last_name": "Sequera",
        "username": "david",
        "birthday": "2003-04-05T12:00:00.000+00:00",
        "city_birth": "Jerusalem,Cucuta",
        "credentials": [
            "64408a1fc1cdbee2aa183952"
        ]
    }
]
}
