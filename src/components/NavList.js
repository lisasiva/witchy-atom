import React from 'react';

class NavList extends React.Component {
  delayLinkClick = (url) => {
    setTimeout(() => {
      window.location = url
    }, 325)
  }

  render() {
    return (
      <div>
      <ul className="nav__list">
        <li className="nav__list-item" onClick={this.props.onLinkClick}>
          <span className="nav__number">01.</span>
          <a href='#about' onClick={(event) => {
            event.preventDefault();
            this.delayLinkClick('#about');
          }} className="nav__link">about</a>
        </li>
        <li className="nav__list-item" onClick={this.props.onLinkClick}>
          <span className="nav__number">02.</span>
          <a href="#projects"  onClick={(event) => {
            event.preventDefault();
            this.delayLinkClick('#projects');
          }} className="nav__link">work</a>
        </li>
        <li className="nav__list-item" onClick={this.props.onLinkClick}>
          <span className="nav__number">03.</span>
          <a href="#contact"  onClick={(event) => {
            event.preventDefault();
            this.delayLinkClick('#contact');
          }} className="nav__link">contact</a>
        </li>
      </ul>
      </div>
    )
  }
}

export default NavList;
