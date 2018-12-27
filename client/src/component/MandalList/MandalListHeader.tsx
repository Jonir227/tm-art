import React from 'react';
import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 35px 0px 10px 0px;
  text-align: right;
`;

const HeaderText = styled.div`
  margin-right: 20px;
  color: ${GreenColor.prime};
`;

interface IMandalListHeaderProps {
  count: number;
}

const MandalListHeader = ({ count }: IMandalListHeaderProps) => {
  return (
    <HeaderWrapper>
      <HeaderText>총 {count} 개의 정원이 있습니다.</HeaderText>
    </HeaderWrapper>
  );
};

export default MandalListHeader;
