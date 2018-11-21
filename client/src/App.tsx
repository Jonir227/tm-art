import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MandalList, MandalMaker } from './pages';

class App extends Component {
  public render() {
    return (
      <>
        <Route path="/make" component={MandalMaker} />
        <Route path="/" component={MandalList} />
      </>
    );
  }
}

export default App;
