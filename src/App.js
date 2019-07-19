import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, Dashboard } from './Pages'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Route
              path="/" 
              exact
              render={routeProps => {
                return <Login {...routeProps} />
              }}
              />
            <Route path="/dashboard" exact component={Dashboard} />
        </Router>
      </header>
    </div>
  );
}

export default App;
