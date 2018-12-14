import React from 'react';
import styled from 'styled-components';

const MandalBox = styled.input`
  text-align: center;
  background-color: rgba(0, 255, 0, 0.3);
  border: none;
  border-radius: 3px;
  height: 75px;
  width: 75px;
`;

const MandalFragment = () => {
  return <MandalBox placeholder="목표" />;
};

export default MandalFragment;
