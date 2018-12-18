import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { TopNavBar } from './container';
import { MandalList, MandalMaker } from './pages';

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled.div`
  width: 1366px;
`;

// http://paletton.com/#uid=12A0u0klepbbtCmgQtGoZlktMgp

class App extends Component {
  public render() {
    return (
      <ContainerWrapper>
        <Container>
          <TopNavBar />
          <Route exact path="/make" component={MandalMaker} />
          <Route exact path="/:id" component={MandalMaker} />
          <Route exact path="/" component={MandalList} />
        </Container>
      </ContainerWrapper>
    );
  }
}

export default App;
