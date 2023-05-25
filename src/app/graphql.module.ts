import { NgModule, inject } from '@angular/core';
import { APOLLO_NAMED_OPTIONS, ApolloModule, NamedOptions } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { CookieService } from 'ngx-cookie-service';

const ip = 'localhost';

const urisMap = new Map<string, string>();
urisMap.set('tools', `http://${ip}:8080/graphql`);
urisMap.set('users', `http://${ip}:8085/graphql`);
urisMap.set('auth', `http://${ip}:8090/graphql`);


const auth = setContext(async (_, { headers }) => {

  // get token from cookies
  // const token = inject(CookieService).get('accessToken');
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI3NWNiZmFhYy1mMzA3LTRlOWQtYTFhMC1mMzBhMGUyOTlhNDkiLCJzdWIiOiI2NDRmMWY3ZjliZmY1NDZlOGQ2NjUxZDIiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInR5cGUiOiJBQ0NFU1MiLCJhdXRob3JpdGllcyI6IlJPTEVfVVNFUiIsImlhdCI6MTY4NDk3MjI1MCwiZXhwIjoxNjg0OTc1ODUwfQ.HgLUr5JdwgbTjHspMCno90DvD-AZPC5KP5nhZY7PBAYbXjDrUjLqiUKB7sqSLTMOHxFMa7QtxQVQnWvq4zNMqA"
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
});


/**
 * Función que devuelve la configuración de ApolloClient
 * @param httpLink Un objeto HttpLink de apollo-angular/http
 */
export function createApollo(httpLink: HttpLink): NamedOptions {

  const clientsRecord: NamedOptions = {
    default: {
      cache: new InMemoryCache(),
      link: ApolloLink.from([auth, httpLink.create({ uri: urisMap.get('tools')})]),
    }
  } ;
  urisMap.forEach((value, key) => {
    clientsRecord[key] = {
      cache: new InMemoryCache(),
      link: ApolloLink.from([auth, httpLink.create({ uri: value})]),
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

