import React, { Component, MouseEvent } from 'react';
import { SignInModal } from '../Modals';
import {
  Logo,
  MenuIcon,
  MenuText,
  NavBarWrapper,
  NavigationWrapper,
  StyledButton,
  StyledLink,
} from './Styles';
class TopNavBar extends Component {
  public render() {
    return (
      <NavBarWrapper>
        <Logo>Mandal Garden 🌱</Logo>
        <NavigationWrapper>
          <StyledLink to="" activeClassName="selected">
            <MenuText>목록</MenuText>
            <MenuIcon icon="list" />
          </StyledLink>
          <StyledLink to="/malk" activeClassName="selected">
            <MenuText>목록</MenuText>
            <MenuIcon icon="list" />
          </StyledLink>
          <SignInModal>
            <StyledButton>
              <MenuText>로그인 </MenuText>
              <MenuIcon icon="key" />
            </StyledButton>
          </SignInModal>
        </NavigationWrapper>
      </NavBarWrapper>
    );
  }
}

export default TopNavBar;
