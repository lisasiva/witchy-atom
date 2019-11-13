import React from 'react';
import '../sass/Nav.scss';

import NavList from './NavList';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileMenuOpen: false };
  }

  onMenuClick = () => {
    // Blurs backdrop when menu is open
    document.getElementsByTagName('body')[0].classList.toggle('blur');

    // Toggle state 
    if (!this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: true });
    } else {
      this.setState({ mobileMenuOpen: false });
    }
  }

  getNavClassName = () => {
    if (this.state.mobileMenuOpen) {
      return 'navigation--mobile';
    } else {
      return 'navigation';
    }
  }

  render() {
    return (
      <div className={this.getNavClassName()}>
        <div className="mobile-nav__overlay"><NavList onLinkClick={this.onMenuClick} /></div>
        <nav className="nav">
          <div className="nav__logo"></div>
          <NavList />
          <div className="nav__button" onClick={this.onMenuClick}>
            <div className="button__icon"></div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
