import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
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
export class ToolListComponent implements OnInit, OnDestroy {
  tools?: any[];
  brands?: any[];
  loading = true;
  search = '';

  filterOn = false;

  
  error: any;
  searchRequestSubscriptions: Subscription[] = [];
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
    this.tools;

  }

  ngOnDestroy(): void {
      
  }

  openFilter() {
    this.filterOn = !this.filterOn;
  }

  addTools() {

    this.apollo.use('tools').watchQuery({ // Realiza la consulta de autenticación
      query: GET_ALL_TOOLS,
    })
    .valueChanges
    .pipe(
      // debounceTime(1000),
      // distinctUntilChanged(),
      // switchMap(({data}: any) => data),
    ).subscribe({ // Suscribe a los resultados de la consulta
          next: ({data}: any ) => { // Si la consulta es exitosa
            console.log(data);
            this.tools = data?.getAllTools;
            this.brands = data.getBrands;
            this.loading = data.loading;
            this.error = data.error;
          },
          error: (error) => { // Si la consulta falla
            console.error('There was an error sending the query', error);
            this.loading = false;
            this.error = error;
          }})

  }


  isToolfromBrand(tool: any): boolean {
    //  check if any brand is selected
    if(Object.values(this.userContext.brandsChecked).includes(true)) {
      return this.userContext.brandsChecked[tool.brand.id];
    }
    return true;
  }


  cancelPendingRequests() {
    this.searchRequestSubscriptions.forEach(sub => sub.unsubscribe());
  }
  onSeachbarChange(name: string) {
    this.search = name;
    this.cancelPendingRequests();
    console.log("[SearchTerm]",this.search);
    if(this.search === '') {
      this.addTools();
      return;
    }
    const apiSubscription = this.apollo.use('tools').watchQuery({ // Realiza la consulta de autenticación})
      query: GET_TOOL_BY_NAME,
      variables: {
        "toolPageInput": {
            "page": 2,
            "size": 20
        },
        "search": this.search 
      }
    })
    .valueChanges
    .subscribe({ // Suscribe a los resultados de la consulta
      next: ( {data}: any ) => { // Si la consulta es exitosa
        console.log(data);
        this.tools = data?.getToolsByName;
        this.loading = data.loading;
        this.error = data.error;
      },
      error: (error) => { // Si la consulta falla
        console.error('There was an error sending the query', error);
        this.loading = false;
        this.error = error;
      }})

    this.searchRequestSubscriptions.push(apiSubscription);
  }


  /**
   * Lista de marcas de herramientas
   * Cada elemento es un objeto con las propiedades:
   * - name: nombre de la marca
   */
}