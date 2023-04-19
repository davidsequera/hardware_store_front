import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente que muestra un botón para ir a la página de inicio de sesión
 */
@Component({
  selector: 'app-sign-in-button', // selector CSS que se utilizará para identificar este componente en una plantilla HTML
  templateUrl: './sign-in-button.component.html', // URL de la plantilla HTML que se utilizará para renderizar este componente
  styleUrls: ['./sign-in-button.component.css'] // URLs de las hojas de estilo CSS que se utilizarán para este componente
})
export class SignInButtonComponent implements OnInit {
  isMobile = false; // indica si la pantalla tiene un ancho menor a 768 píxeles
  pathname = ''; // indica la ruta actual de la página

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  /**
   * Se ejecuta al inicializar el componente.
   * Comprueba el ancho de la pantalla y suscribe el componente al evento de redimensionamiento de la ventana y al evento de cambio de ruta de la aplicación.
   */
  ngOnInit(): void {
    this.checkWindowWidth(); // Comprueba el ancho de la pantalla
    this.renderer.listen('window', 'resize', () => {
      this.checkWindowWidth(); // Comprueba el ancho de la pantalla
    });
    this.router.events.subscribe(() => {
      this.pathname = this.router.url;  // Actualiza la ruta actual de la página
    });
  }

  /**
   * Navega a la página de inicio de sesión
   */
  toSignIn(): void {
    this.router.navigate(['/login']); // Navega a la página de inicio de sesión
  }

  /**
   * Comprueba si el ancho de la pantalla es menor a 768 píxeles
   */
  private checkWindowWidth(): void {
    this.isMobile = window.innerWidth < 768; // Comprueba si el ancho de la pantalla es menor a 768 píxeles
  }
}
