import { NgModule, inject } from '@angular/core';
import { APOLLO_NAMED_OPTIONS, ApolloModule, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { CookieService } from 'ngx-cookie-service';

const urisMap = new Map<string, string>();
urisMap.set('tools', 'http://localhost:8080/graphql');
urisMap.set('users', 'http://localhost:8085/graphql');
urisMap.set('auth', 'http://localhost:8090/graphql');

/**
 * Función que devuelve la configuración de ApolloClient
 * @param httpLink Un objeto HttpLink de apollo-angular/http
 */
export function createApollo(httpLink: HttpLink): NamedOptions {

  const clientsRecord: NamedOptions = {
    default: {
      cache: new InMemoryCache(),
      link: httpLink.create({ uri: urisMap.get('tools'),
      withCredentials: true,
    })
    }
  } ;
  urisMap.forEach((value, key) => {
    clientsRecord[key] = {
      cache: new InMemoryCache(),
      link: httpLink.create({ uri: value , withCredentials: true})
    }
  })
  return clientsRecord;
}

/**
 * Módulo de Angular que proporciona la configuración de ApolloClient
 */
@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS, // <-- Different from standard initialization
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

