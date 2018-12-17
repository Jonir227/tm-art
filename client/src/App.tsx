import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { TopNavBar } from './container';
import { MandalList, MandalMaker } from './pages';

// http://paletton.com/#uid=12A0u0klepbbtCmgQtGoZlktMgp

class App extends Component {
  public render() {
    return (
      <>
        <TopNavBar />
        <Route exact path="/make" component={MandalMaker} />
        <Route exact path="/:id" component={MandalMaker} />
        <Route exact path="/" component={MandalList} />
      </>
    );
  }
}

export default App;
