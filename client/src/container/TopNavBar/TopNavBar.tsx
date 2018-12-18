import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo, NavBarWrapper, NavigationWrapper } from './Styles';
class TopNavBar extends Component {
  public render() {
    return (
      <NavBarWrapper>
        <Logo>Mandal Garden 🌱</Logo>
        <NavigationWrapper>
          <NavLink to="" activeClassName="selected">
            목록
          </NavLink>
          <NavLink to="" activeClassName="selected">
            목록
          </NavLink>
        </NavigationWrapper>
      </NavBarWrapper>
    );
  }
}

export default TopNavBar;
