import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { BlueColor } from './constants/colors';
import TopNavBar from './container/TopNavBar';
import { MandalList, MandalMaker } from './pages';
import { media } from './utils/media';

const BannerBackground = styled.div`
  background-color: ${BlueColor.prime};
  width: 100%;
  height: 462px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled.div`
  width: 1366px;
  ${media.large`
    width: 1366px;
  `}
  ${media.medium`
    width: 900px;
  `}
  ${media.small`
    width: 560px;
  `}
`;

// http://paletton.com/#uid=12A0u0klepbbtCmgQtGoZlktMgp

class App extends Component {
  public render() {
    return (
      <>
        <BannerBackground />
        <ContainerWrapper>
          <Container>
            <TopNavBar />
            <Route exact path="/make" component={MandalMaker} />
            <Route exact path="/:id" component={MandalMaker} />
            <Route exact path="/" component={MandalList} />
          </Container>
        </ContainerWrapper>
      </>
    );
  }
}

export default App;
