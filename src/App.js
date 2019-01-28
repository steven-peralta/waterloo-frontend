import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import coreapi from 'coreapi';

const client = new coreapi.Client();
let schema = undefined;

client.get("http://127.0.0.1:8000/schema/?format=corejson").then((data) => {
  schema = data;
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar/>
          </header>
          <main role="main" className="container">
              <Route exact path="/" component={Home} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
export {client};
