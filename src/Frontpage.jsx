import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './relayEnvironment';
import graphql from 'babel-plugin-relay/macro';

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderQuery = ({error, props}) => {
      if (error) {
        return <div>{error.message}</div>;
      } else if (props) {
        return <div>{JSON.stringify(props)}</div>;
      }
      return <div>Loading...</div>;
    };

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
            query FrontpageQuery {
                allUsers {
                    edges {
                        node {
                            name
                        }
                    }
                }
            }
        `}
        variables={{}}
        render={renderQuery}
        />
    );
  }
}
