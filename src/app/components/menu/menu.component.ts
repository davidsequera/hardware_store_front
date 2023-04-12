import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() MenuOn: boolean = false;


  constructor(private userContext: UserContextService, private router: Router) { }

  ngOnInit(): void {
  }

  toPush(route: string): void {
    // You can implement your own toogleAccoutMenu() function logic here
    // if needed
    this.router.navigate([route]);
  }

  logout(): void {
    this.userContext.logout();
  }
}
