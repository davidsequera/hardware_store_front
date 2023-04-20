import {Component, Input} from '@angular/core';

/**
 * Componente para los elementos curvos
 */
@Component({
  selector: 'app-curved-element',
  templateUrl: './curved-element.component.html',
  styleUrls: ['./curved-element.component.css']
})
export class CurvedElementComponent {
  @Input() title?: string ; // Título del elemento
  @Input() description?: string ; // Descripción del elemento
  @Input() link?: string ;  // Enlace del elemento
  @Input() imageSrc?: string; // Source of the object image
  @Input() imageAlt?: string; // Alt text of the object image

  getTitleFontSize(): string {
    if (this.title && this.title.length > 20) {
      return '1.2em';
    }
    return '1.8em';
  }

  getDescriptionFontSize(): string {
    if (this.description && this.description.length > 40) {
      return '0.85em';
    }
    return '1em';
  }
}
