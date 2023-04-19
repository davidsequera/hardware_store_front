import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

/**
 * Componente para la entrada de datos de usuario
 */
@Component({
  selector: 'app-user-input', // Selector para usar en el HTML
  templateUrl: './user-input.component.html', // Plantilla HTML
  styleUrls: ['./user-input.component.css'] // Estilos CSS
})
/**
 * Componente para la entrada de datos de usuario
 */
export class UserInputComponent {
  @Input() id: string; // ID del campo
  @Input() title: string; // Título del campo
  @Input() type: string;  // Tipo de campo
  @Input() name: string;  // Nombre del campo
  @Input() parentFormGroup!: FormGroup; // Grupo de campos del formulario
  /**
   * Constructor de la clase
   */
  constructor(){
    this.name = '';
    this.id = '';
    this.title = '';
    this.type = '';
  }
}
