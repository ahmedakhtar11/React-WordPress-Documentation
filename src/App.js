import React, { useEffect, useState } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Pages/Home';
import { Version2 } from './components/Pages/Version2';
import { Chinese } from './components/Pages/Chinese';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar';

function App() {


  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/version2" component={Version2} />
          <Route path="/chinese" component={Chinese} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
