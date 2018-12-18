import styled from 'styled-components';
import { GreenColor } from '../../constants/colors';

export const NavBarWrapper = styled.header`
  display: flex;
  flex: 10;
  justify-content: space-between;
  color: ${GreenColor.prime};
  top: 0px;
  height: 50px;
  padding-top: 12px;
  border-bottom: 1px solid ${GreenColor.dark};
`;

export const Logo = styled.h1`
  padding: 0px;
  margin: 0px 0px 0px 10px;
  display: flex;
  flex: 6;
  align-items: center;
  font-size: 35px;
  height: 100%;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  flex: 4;
  justify-content: space-evenly;
  align-items: center;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-size: 23px;
    height: 100%;
  }
  & > a:hover {
    background-color: ${GreenColor.light};
  }
  & > a:visited {
  }
  & > a.selected {
    border-bottom: 5px solid ${GreenColor.dark};
  }
`;
