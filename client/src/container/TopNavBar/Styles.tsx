import styled from 'styled-components';
import { BlueColor, GreenColor } from '../../constants/colors';

export const NavBarWrapper = styled.header`
  height: 50px;
  display: flex;
  flex: 10;
  justify-content: space-between;
  top: 0px;
  padding: 12px 20px 0px 20px;
  background-color: ${BlueColor.prime};
  color: ${GreenColor.prime};
`;

export const Logo = styled.h1`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex: 6;
  align-items: center;
  font-size: 35px;
  height: 100%;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  flex: 4;
  justify-content: flex-end;
  align-items: center;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 80%;
    margin: 0px 4px 0px 4px;
    border-radius: 2px;
    text-decoration: none;
    font-size: 20px;
    color: ${GreenColor.prime};
  }
  & > a:hover {
    color: ${BlueColor.prime};
    background-color: ${GreenColor.light};
  }
  & > a.selected {
    color: ${BlueColor.prime};
    background-color: ${GreenColor.prime};
  }
  & > a.selected:hover {
    color: ${BlueColor.prime};
    background-color: ${GreenColor.light};
  }
`;
