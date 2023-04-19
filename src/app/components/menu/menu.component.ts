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

  /**
   * Navega a una ruta especificada.
   * @param route - La ruta a la que se quiere navegar.
   *
   */
  toPush(route: string): void {
    // Puede implementar su propia lógica de función toggleAccountMenu() aquí si es necesario
    this.router.navigate([route]);
  }

  /**
   * Cierra la sesión del usuario actual.
   *
   */
  logout(): void {
    this.userContext.logout();
  }
}
