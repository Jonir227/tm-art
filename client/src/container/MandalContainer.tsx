import React from 'react';
import styled from 'styled-components';
import { MandalFragment } from '../component';

const MandalContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

const MandalContainer = () => {
  return (
    <MandalContainerWrapper>
      <MandalFragment />
      <MandalFragment />
      <MandalFragment />
      <MandalFragment />
      <MandalFragment />
      <MandalFragment />
      <MandalFragment />
      <MandalFragment />
      <MandalFragment />
    </MandalContainerWrapper>
  );
};

export default MandalContainer;
