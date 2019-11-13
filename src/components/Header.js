import React from 'react';
import '../sass/Header.scss';
import Button from './Button';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__content">
            <h1 className="headline--primary">
              <div className="headline--primary-1"><span className="headline--gradient">Hi, I'm Lisa Siva.</span></div>
              <div className="headline--primary-2">I sprinkle frontend magic across the web.</div>
            </h1>
            <h2 className="headline--secondary">
              I'm a frontend engineer in San Francisco. If you enjoy getting lost in Middle Earth, Hogsmeade, or Gallifrey, we should be friends.
            </h2>
              <div className="u-margin-top-medium">
            <Button btnText="Send Me an Owl" btnLink="mailto:lisashantisiva@gmail.com" type="medium"/>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;


/*
<h1 className="headline--primary">
  <div className="headline--primary-1">Hi, there! I'm <span className="headline--gradient">Lisa Siva</span>.</div>
  <div className="headline--primary-2">I sprinkle frontend magic across the web.</div>
</h1>
<h2 className="headline--secondary">
  I'm a frontend engineer in San Francisco. If you enjoy getting lost in Middle Earth, Hogsmeade, or Gallifrey, we should be friends.
</h2>
*/
