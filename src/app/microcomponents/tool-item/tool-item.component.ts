import { Component, Input } from '@angular/core';

/**
 * Componente para los elementos de la lista de herramientas
 */
@Component({
  selector: 'app-tool-item', // Selector para usar en el HTML
  templateUrl: './tool-item.component.html',  // Plantilla HTML
  styleUrls: ['./tool-item.component.css']  // Estilos CSS
})
/**
 * Componente para los elementos de la lista de herramientas
 */
export class ToolItemComponent {
  @Input() title?: string ; // Título del elemento
  @Input() description?: string ; // Descripción del elemento
  @Input() link?: string ;  // Enlace del elemento
}
