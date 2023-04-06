import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const urisMap = new Map<string, string>()
urisMap.set('tools', 'http://localhost:8080')
urisMap.set('users', 'http://localhost:8085')
urisMap.set('auth', 'http://localhost:8090')

// const httpLinkMap = new Map<string, HttpLink>()
// urisMap.forEach((uri, key) => { httpLinkMap.set(key, new HttpLink({uri})) })

const uri = 'http://localhost:8090'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
