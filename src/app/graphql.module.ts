import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const urisMap = new Map<string, string>();
urisMap.set('tools', 'http://localhost:8080');
urisMap.set('users', 'http://localhost:8085');
urisMap.set('auth', 'http://localhost:8090');

/**
 * Función que devuelve la configuración de ApolloClient
 * @param httpLink Un objeto HttpLink de apollo-angular/http
 */
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri: urisMap.get('auth') }), // crea un enlace de HttpLink para la URL de autenticación
    cache: new InMemoryCache(), // utiliza la caché de InMemoryCache
  };
}

/**
 * Módulo de Angular que proporciona la configuración de ApolloClient
 */
@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo, // utiliza la función createApollo para crear la configuración de ApolloClient
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
