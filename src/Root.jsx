import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Frontpage from './Frontpage';

class Root extends Component {
    render() {
        return (
          <div className="container">
              <Router>
                        <div>
                            <Route path="/" component={Frontpage} />
                        </div>
                    </Router>
                </div>
        )
    }
}

export default Root;
