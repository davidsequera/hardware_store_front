import { Component, HostListener, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserContextService } from 'src/app/services/context/user-context.service';

/**
 * Componente que representa el botón de la cuenta del usuario
 */
@Component({
  selector: 'app-menu-button', // selector CSS que se utilizará para identificar este componente en una plantilla HTML
  templateUrl: './menu-button.component.html', // URL de la plantilla HTML que se utilizará para renderizar este componente
  styleUrls: ['./menu-button.component.css'] // URLs de las hojas de estilo CSS que se utilizarán para este componente
})
/**
 * Clase que representa el botón de la cuenta del usuario
 */
export class MenuButtonComponent implements OnInit {
  
  jwt: string | null = null;
  MenuOn = false; // indica si el menú de la cuenta del usuario está abierto

  isMinWidth768px = window.innerWidth >= 768; // indica si la pantalla tiene un ancho mayor o igual a 768 píxeles

  @ViewChild('menuRef', { static: true }) menuRef?: ElementRef; // referencia al elemento del menú de la cuenta del usuario

  constructor(private renderer: Renderer2, private userContext: UserContextService, private el: ElementRef) { }

  /**
   * Se ejecuta al inicializar el componente.
   * Se suscribe el componente al evento de redimensionamiento de la ventana y al evento de clic fuera del menú de la cuenta del usuario.
   */
  ngOnInit(): void {
    this.userContext.jwt$.subscribe(jwt => this.jwt = jwt);
    this.renderer.listen('window', 'mousedown', (event) => {
      if (!this.menuRef?.nativeElement.contains(event.target)) {
        this.MenuOn = false;
      }
    });
  }

  /**
   * Alterna el estado del menú de la cuenta del usuario
   */
  toggleMenu(): void {
    this.MenuOn = !this.MenuOn;
  }

  /**
   * Comprueba si el ancho de la pantalla es mayor o igual a 768 píxeles
   */
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.isMinWidth768px = window.innerWidth >= 768;
  }

}
