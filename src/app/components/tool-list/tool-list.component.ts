import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_TOOLS, GET_TOOL_BY_NAME } from 'src/app/graphql/graphql.tools.queries';
import { UserContextService } from 'src/app/services/context/user-context.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
/**
 * Componente que muestra la lista de herramientas
 */
export class ToolListComponent implements OnInit {
  tools?: any[];
  brands?: any[];
  loading = true;


  error: any;
  /**
   * Servicio de contexto de usuario
   */

  /**
   * Constructor
   * @param userContext Servicio de contexto de usuario
   */
  constructor(private apollo: Apollo, private userContext: UserContextService) {
    this.apollo = apollo;
    this.userContext = userContext;
  }

  ngOnInit(): void {
    this.addTools();
  }


  addTools() {
    this.apollo.use('tools').watchQuery({ // Realiza la consulta de autenticación
      query: GET_ALL_TOOLS,
    })
    .valueChanges
    .subscribe({ // Suscribe a los resultados de la consulta
      next: ({ data }: any ) => { // Si la consulta es exitosa
        console.log(data);
        this.tools = data?.getAllTools;
        this.brands = data?.getBrands;
        this.loading = data.loading;
        this.error = data.error;
      },
      error: (error) => { // Si la consulta falla
        console.error('There was an error sending the query', error);
        this.error = error;
      }
    })

  }

  onSeachbarInput(name: string) {

    console.log("[NAME]",name);
    if(name === '') {
      this.addTools();
      return;
    }
    this.apollo.use('tools').watchQuery({ // Realiza la consulta de autenticación})
      query: GET_TOOL_BY_NAME,
      variables: {
        "toolPageInput": {
            "page": 2,
            "size": 20
        },
        "search": name 
      }
    })
    .valueChanges
    .subscribe({ // Suscribe a los resultados de la consulta
      next: ({ data }: any ) => { // Si la consulta es exitosa
        console.log(data);
        this.tools = data?.getToolsByName;
        this.loading = data.loading;
        this.error = data.error;
      },
      error: (error) => { // Si la consulta falla
        console.error('There was an error sending the query', error);
        this.error = error;
      }})
  }


  /**
   * Lista de marcas de herramientas
   * Cada elemento es un objeto con las propiedades:
   * - name: nombre de la marca
   */
}