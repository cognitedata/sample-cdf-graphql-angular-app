import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';

// UPDATE THE URL BELOW TO BE THE CORRECT PROJECT ID
const URL =
  'https://itg.cognite.ai/api/v1/projects/a24a387c5-396e-4443-89d4-cfad8ade6509/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: ApolloLink.from([
      setContext(() => ({
        headers: {
          authorization: `Bearer ${localStorage.getItem('API_KEY')}`,
        },
      })),
      httpLink.create({
        uri: URL,
      }),
    ]),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
