import { Component } from '@angular/core';

/**
 * Componente raíz de la aplicación Angular
 */
@Component({
  selector: 'app-root', // selector CSS que se utilizará para identificar este componente en una plantilla HTML
  templateUrl: './app.component.html', // URL de la plantilla HTML que se utilizará para renderizar este componente
})
export class AppComponent {
  title = 'hardware_store_front'; // variable que se utilizará en la plantilla HTML para mostrar el título de la aplicación
}
