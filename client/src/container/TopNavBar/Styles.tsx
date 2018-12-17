import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';

export const NavBarWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  top: 0px;
  height: 50px;
  background-color: ${GreenColor.prime};
  box-shadow: 1px 1px 1px #cccccc;
`;

export const Logo = styled.h1`
  padding: 0px;
  margin: 0px 0px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 35px;
  height: 100%;
`;
