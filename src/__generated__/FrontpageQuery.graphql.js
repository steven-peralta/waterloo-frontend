/**
 * @flow
 * @relayHash 0ea422b52c81efb3e7ed01879ab24420
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FrontpageQueryVariables = {||};
export type FrontpageQueryResponse = {|
  +allUsers: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +name: string
      |}
    |}>
  |}
|};
export type FrontpageQuery = {|
  variables: FrontpageQueryVariables,
  response: FrontpageQueryResponse,
|};
*/


/*
query FrontpageQuery {
  allUsers {
    edges {
      node {
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FrontpageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allUsers",
        "storageKey": null,
        "args": null,
        "concreteType": "UserNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "UserNode",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FrontpageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allUsers",
        "storageKey": null,
        "args": null,
        "concreteType": "UserNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "UserNode",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FrontpageQuery",
    "id": null,
    "text": "query FrontpageQuery {\n  allUsers {\n    edges {\n      node {\n        name\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bc428c6aa70b36f639431d98eaa24acc';
module.exports = node;
