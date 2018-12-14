import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MandalList, MandalMaker } from './pages';

class App extends Component {
  public render() {
    return (
      <>
        <Route exact path="/make" component={MandalMaker} />
        <Route exact path="/:id" component={MandalMaker} />
        <Route exact path="/" component={MandalList} />
      </>
    );
  }
}

export default App;
