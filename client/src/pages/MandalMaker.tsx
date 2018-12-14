import React, { Component } from 'react';
import styled from 'styled-components';
import { MandalContainer } from '../container';

const MadnalWrapper = styled.div`
  width: 800px;
  height: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

class MandalMaker extends Component {
  public render() {
    return (
      <MadnalWrapper>
        <MandalContainer />
        <MandalContainer />
        <MandalContainer />
        <MandalContainer />
        <MandalContainer />
        <MandalContainer />
        <MandalContainer />
        <MandalContainer />
        <MandalContainer />
      </MadnalWrapper>
    );
  }
}

export default MandalMaker;
