import React, { Component } from 'react';
import { Logo, NavBarWrapper } from './Styles';
class TopNavBar extends Component {
  public render() {
    return (
      <NavBarWrapper>
        <Logo>Mandal Garden</Logo>
      </NavBarWrapper>
    );
  }
}

export default TopNavBar;
