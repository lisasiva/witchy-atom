import React from 'react';
import '../sass/Footer.scss';

class Footer extends React.Component {
  getGreeting() {
    const greetings = [
      `Mischief managed!`,
      `Have a magical day!`,
      `Go out and make some magic.`,
      `Get down with your witchy self.`,
      `Nitwit! Oddment! Blubber! Tweak!`,
      `Don't let the Muggles get you down.`
    ]
    let index = Math.floor(Math.random() *(greetings.length));
    return greetings[index];
  }
  render() {
    return (
      <footer className="footer u-margin-top-largest" id="footer">
        <div className="footer__container">

          <div className="footer__credits">
            Icons by <a className="footer__credit" href="https://miraviolet.com/" target="_blank" rel="noopener noreferrer">Mira Violet</a> &#38; <a className="footer__credit" href="https://fontawesome.com/license" target="_blank" rel="noopener noreferrer">Font Awesome</a>
          </div>

          <div className="footer__delight">
            <span className="footer__greeting">{this.getGreeting()}</span>
            <span className="footer__icon">&nbsp;</span>
          </div>

        </div>

      </footer>
    )
  }
}

export default Footer
