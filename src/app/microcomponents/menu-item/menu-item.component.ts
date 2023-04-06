import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/services/context/user-context.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  
  @Input() title: string | undefined;
  @Input() link: string = '';


  constructor(private router: Router) { }

  toPush(route: string): void {
    if (route === 'logout') {
      this.logout();
    }else{
      this.router.navigate([route]);
    }
    // this.userContext.toggleAccountMenu();
  }
  logout(): void {
    // this.userContext.logout();
  }

}
