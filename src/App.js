import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './components/Pages/Home';
import { Landing } from './components/Pages/Landing';
import { Version2 } from './components/Pages/Version2';
import { Chinese } from './components/Pages/Chinese';
import { NoMatch } from './components/Pages/NoMatch';
import Sticky from './components/Layout/Footer';

function App() {

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/documentation" component={Home} />
          <Route path="/version2" component={Version2} />
          <Route path="/chinese" component={Chinese} />
          <Route component={NoMatch} />
        </Switch>
        <Sticky/>
      </Router>
    </React.Fragment>
  );
}

export default App;
