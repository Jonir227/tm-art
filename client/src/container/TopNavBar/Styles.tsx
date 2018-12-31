import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { BlueColor, GreenColor } from '../../constants/colors';
import { media } from '../../utils/media';

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
  font-family: 'Indie Flower';
  font-size: 35px;
  height: 100%;
  ${media.small`
    font-size: 16px;
    max-width: 90px;
  `}
`;

export const MenuText = styled.div`
  ${media.small`
    display: none;
  `}
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  display: none;
  ${media.small`
    display: block;
  `}
`;

const ButtonStyle = css`
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
  ${media.small`
    width: 40px;
  `}
  &:hover {
    color: ${BlueColor.prime};
    background-color: ${GreenColor.light};
  }
  &.selected {
    color: ${BlueColor.prime};
    background-color: ${GreenColor.prime};
  }
  &.selected:hover {
    color: ${BlueColor.prime};
    background-color: ${GreenColor.light};
  }
`;

export const StyledLink = styled(NavLink)`
  ${ButtonStyle}
`;

export const StyledButton = styled.button`
  ${ButtonStyle}
  border: none;
  background-color: transparent;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  flex: 4;
  justify-content: flex-end;
  align-items: center;
`;
