import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from 'src/app/services/context/user-context.service';

/**
 * Componente que representa un elemento de menú
 */
@Component({
  selector: 'app-menu-item', // selector CSS que se utilizará para identificar este componente en una plantilla HTML
  templateUrl: './menu-item.component.html', // URL de la plantilla HTML que se utilizará para renderizar este componente
  styleUrls: ['./menu-item.component.css'] // URLs de las hojas de estilo CSS que se utilizarán para este componente
})
export class MenuItemComponent  {

  @Input() title: string | undefined; // título del elemento de menú
  @Input() mdIcon: string = "fiber_manual_record"; // título del elemento de menú
  @Input() link: string = ''; // ruta del elemento de menú

  constructor(private router: Router, private userContext: UserContextService) { }

  /**
   * Navega a la ruta especificada en el elemento de menú
   * Si la ruta es 'logout', llama al método `logout()`
   */
  toPush(route: string): void {
    if (route === 'logout') {
      this.logout();
    } else {
      this.router.navigate([route]);
    }
    // this.userContext.toggleAccountMenu();
  }

  /**
   * Cierra la sesión del usuario
   */
  logout(): void {
    this.userContext.logout();
  }

}
