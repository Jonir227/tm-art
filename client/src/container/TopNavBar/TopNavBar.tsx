import React, { Component } from 'react';
import { LoginModal } from '../../component/TopNavbar';
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
          <LoginModal>
            <StyledButton>
              <MenuText>로그인 </MenuText>
              <MenuIcon icon="key" />
            </StyledButton>
          </LoginModal>
        </NavigationWrapper>
      </NavBarWrapper>
    );
  }
}

export default TopNavBar;
