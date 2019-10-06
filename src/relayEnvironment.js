import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

function fetchQuery(operation,
                    variables,
                    cacheConfig,
                    uploadables) {
  return fetch('http://127.0.0.1:8000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    }),
  }).then(res => {
    return res.json();
  })
}

const network = Network.create(fetchQuery);
const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store
});

export default environment;
