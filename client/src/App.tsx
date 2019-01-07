import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import TopNavBar from './container/TopNavBar';
import { MandalList, MandalMaker } from './pages';
import { IRootState } from './redux/reducers';
import { media } from './utils/media';
import { isFatalError } from './utils/selector';

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

interface IAppProps {
  fatalError: boolean;
}

class App extends Component<IAppProps> {
  public render() {
    return (
      <ContainerWrapper>
        <Container>
          <TopNavBar />
          {this.renderAppContent()}
        </Container>
      </ContainerWrapper>
    );
  }

  public renderAppContent = () => {
    const { fatalError } = this.props;
    if (fatalError) {
      return <div>에러!</div>;
    }
    return (
      <>
        <Route exact path="/make" component={MandalMaker} />
        <Route exact path="/mandal/:id" component={MandalMaker} />
        <Route exact path="/" component={MandalList} />
      </>
    );
  };
}

export default connect((state: IRootState) => ({
  fatalError: isFatalError(state),
}))(App);
