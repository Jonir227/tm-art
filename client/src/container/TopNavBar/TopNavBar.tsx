import React, { Component } from 'react';
import {
  Logo,
  MenuIcon,
  MenuText,
  NavBarWrapper,
  NavigationWrapper,
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
          <StyledLink to="/asdf" activeClassName="selected">
            <MenuText>목록</MenuText>
            <MenuIcon icon="list" />
          </StyledLink>
        </NavigationWrapper>
      </NavBarWrapper>
    );
  }
}

export default TopNavBar;
