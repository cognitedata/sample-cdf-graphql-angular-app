import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { ListResponse, Model3D, RevealNode3D, Revision3D } from '@cognite/sdk';
import { Apollo, gql } from 'apollo-angular';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CogniteAuthService } from './cognite-auth.service';

const QUERY_GROUPS = gql`
  query QueryGroup($modelId: String, $revisionId: String, $groupId: ID) {
    MyGroup(
      filter: { modelId: $modelId, revisionId: $revisionId, id: $groupId }
    ) {
      id
      name
      modelId
      revisionId
      nodes {
        nodeId
        comment
      }
    }
  }
`;

const CREATE_GROUP = gql`
  mutation CreateGroup(
    $modelId: String!
    $revisionId: String!
    $name: String!
  ) {
    CreateMyGroup(modelId: $modelId, revisionId: $revisionId, name: $name) {
      id
    }
  }
`;

const DELETE_GROUP = gql`
  mutation CreateGroup($groupId: ID!) {
    DeleteMyGroup(id: $groupId) {
      id
    }
  }
`;

const CREATE_NODE = gql`
  mutation CreateNode($nodeId: String!, $comment: String) {
    MergeMyNode(nodeId: $nodeId, comment: $comment) {
      nodeId
    }
  }
`;

const QUERY_NODE_BY_ID = gql`
  query MyNode($nodeId: String!) {
    MyNode(nodeId: $nodeId) {
      nodeId
    }
  }
`;

const ADD_NODE_TO_GROUP = gql`
  mutation AddNodeToGroup($nodeId: String!, $groupId: ID!) {
    AddMyNodeGroup(from: { id: $groupId }, to: { nodeId: $nodeId }) {
      to {
        nodeId
      }
    }
  }
`;
const REMOVE_NODE_FROM_GROUP = gql`
  mutation RemoveNodeToGroup($nodeId: String!, $groupId: ID!) {
    RemoveMyNodeGroup(from: { id: $groupId }, to: { nodeId: $nodeId }) {
      to {
        nodeId
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class CogniteITGService {
  constructor(private graphqlClient: Apollo) {}

  getGroups(modelId: number, revisionId: number, pollInterval?: number) {
    return this.graphqlClient.watchQuery({
      query: QUERY_GROUPS,
      variables: {
        modelId: `${modelId}`,
        revisionId: `${revisionId}`,
      },
      pollInterval,
    });
  }
  getGroup(groupId: string, pollInterval?: number) {
    return this.graphqlClient.watchQuery<{ MyGroup: any[] }>({
      query: QUERY_GROUPS,
      variables: {
        groupId,
      },
      pollInterval,
    });
  }
  createGroup(modelId: number, revisionId: number, name: string) {
    return this.graphqlClient.mutate({
      mutation: CREATE_GROUP,
      variables: {
        modelId: `${modelId}`,
        revisionId: `${revisionId}`,
        name,
      },
    });
  }
  deleteGroup(groupId: string) {
    return this.graphqlClient.mutate({
      mutation: DELETE_GROUP,
      variables: {
        groupId,
      },
    });
  }

  addNodeToGroup(nodeId: number, groupId: string, comment?: string) {
    return this.createNodeIfNotExists(nodeId, comment).subscribe(() => {
      return this.graphqlClient
        .mutate({
          mutation: ADD_NODE_TO_GROUP,
          variables: {
            nodeId: `${nodeId}`,
            groupId: groupId,
          },
        })
        .subscribe();
    });
  }
  removeNodeFromGroup(nodeId: number, groupId: string) {
    return this.graphqlClient
      .mutate({
        mutation: REMOVE_NODE_FROM_GROUP,
        variables: {
          nodeId: `${nodeId}`,
          groupId: groupId,
        },
      })
      .subscribe();
  }

  createNodeIfNotExists(nodeId: number, comment?: string) {
    return this.graphqlClient
      .query<{ MyNode: any[] }>({
        query: QUERY_NODE_BY_ID,
        variables: {
          nodeId: `${nodeId}`,
        },
      })
      .pipe(
        map(
          (
            result: ApolloQueryResult<{
              MyNode: any[];
            }>
          ) => {
            if (result.data.MyNode.length === 0) {
              return this.graphqlClient
                .mutate<{ MyNode: any[] }>({
                  mutation: CREATE_NODE,
                  variables: {
                    nodeId: `${nodeId}`,
                    comment: comment,
                  },
                })
                .subscribe();
            }
            return result;
          }
        )
      );
  }
}
