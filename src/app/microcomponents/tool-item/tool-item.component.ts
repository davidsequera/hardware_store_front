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
  @Input() id?: string;
  @Input() name?: string;
  @Input() description?: string;
  @Input() brand: any;
  @Input() cities: any;
}
