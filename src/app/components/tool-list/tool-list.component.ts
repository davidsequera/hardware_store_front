import { Component } from '@angular/core';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
/**
 * Componente que muestra la lista de herramientas
 */
export class ToolListComponent {
  /**
   * Servicio de contexto de usuario
   */
  userContext: UserContextService;

  /**
   * Constructor
   * @param userContext Servicio de contexto de usuario
   */
  constructor(userContext: UserContextService) {
    this.userContext = userContext;
  }

  /**
   * Lista de herramientas, cada elemento es un objeto con las propiedades:
   * - name: nombre de la herramienta
   * - description: descripción de la herramienta
   * - link: enlace a la herramienta en Amazon
   * - brand: marca de la herramienta
    */
  tools: any[] = [{"name":'Dewalt DWE7491RS', "description":'10-Inch Jobsite Table Saw with 32-1/2-Inch Rip Capacity', "link":'https://www.amazon.com/Dewalt-DWE7491RS-Jobsite-Capacity-10-Inch/dp/B00KX4X9ZS', "brand":'Dewalt'}, {"name":'Milwaukee 2736-20 M18 FUEL 10-Inch Table Saw', "description":'10-Inch Table Saw with One-Key', "link":'https://www.amazon.com/Milwaukee-2736-20-M18-FUEL-10-Inch/dp/B07B4JZQZQ', "brand":'Milwaukee'}, {"name":'Ridgid R4512 10-Inch Table Saw', "description":'10-Inch Table Saw with 32-1/2-Inch Rip Capacity', "link":'https://www.amazon.com/Ridgid-R4512-10-Inch-Table-Saw/dp/B00KX4X9ZS', "brand":'Ridgid'}, {"name":'Makita 2705 10-Inch Contractor Table Saw', "description":'10-Inch Contractor Table Saw with 25-Inch Rip Capacity', "link":'https://www.amazon.com/Makita-2705-10-Inch-Contractor-Capacity/dp/B00004R8JH', "brand":'Makita'}, {"name":'Dewalt DWE7491RS', "description":'10-Inch Jobsite Table Saw with 32-1/2-Inch Rip Capacity', "link":'https://www.amazon.com/Dewalt-DWE7491RS-Jobsite-Capacity-10-Inch/dp/B00KX4X9ZS', "brand":'Dewalt'}, {"name":'Milwaukee 2736-20 M18 FUEL 10-Inch Table Saw', "description":'10-Inch Table Saw with One-Key', "link":'https://www.amazon.com/Milwaukee-2736-20-M18-FUEL-10-Inch/dp/B07B4JZQZQ', "brand":'Milwaukee'}, {"name":'Ridgid R4512', "description":'10-Inch Table Saw with 32-1/2-Inch Rip Capacity', "link":'https://www.amazon.com/Ridgid-R4512-10-Inch-Table-Saw/dp/B00KX4X9ZS', "brand":'Ridgid'}, {"name":'Makita 2705 10-Inch Contractor Table Saw', "description":'10-Inch Contractor Table Saw with 25-Inch Rip Capacity', "link":'https://www.amazon.com/Makita-2705-10-Inch-Contractor-Capacity/dp/B00004R8JH', "brand":'Makita'}, {"name":'Dewalt DWE7491RS', "description":'10-Inch Jobsite Table Saw with 32-1/2-Inch Rip Capacity', "link":'https://www.amazon.com/Dewalt-DWE7491RS-Jobsite-Capacity-10-Inch/dp/B00KX4X9ZS', "brand":'Dewalt'}, {"name":'Milwaukee 2736-20 M18 FUEL 10-Inch Table Saw', "description":'10-Inch Table Saw with One-Key', "link":'https://www.amazon.com/Milwaukee-2736-20-M18-FUEL-10-Inch/dp/B07B4JZQZQ', "brand":'Milwaukee'}, {"name":'Ridgid R4512', "description":'10-Inch Table Saw with 32-1/2-Inch Rip Capacity', "link":'https://www.amazon.com/Ridgid-R4512-10-Inch-Table-Saw/dp/B00KX4X9ZS', "brand":'Ridgid'}, {"name":'Makita 2705 10-Inch Contractor Table Saw', "description":'10-Inch Contractor Table Saw with 25-Inch Rip Capacity', "link":'https://www.amazon.com/Makita-2705-10-Inch-Contractor-Capacity/dp/B00004R8JH', "brand":'Makita'}];

  /**
   * Lista de marcas de herramientas
   * Cada elemento es un objeto con las propiedades:
   * - name: nombre de la marca
   */
  brands: any[] = [{"name":'Dewalt'}, {"name":'Milwaukee'}, {"name":'Ridgid'}, {"name":'Makita'}];
}
