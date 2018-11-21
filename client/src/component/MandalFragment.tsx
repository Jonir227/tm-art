import React from 'react';
import styled from 'styled-components';

const MandalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 255, 0, 0.3);
  border-radius: 3px;
  height: 80px;
  width: 80px;
`;

const MandalFragment = () => {
  return <MandalBox>ㅑㅑㅑ</MandalBox>;
};

export default MandalFragment;
