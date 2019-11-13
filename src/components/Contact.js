import React from 'react';
import '../sass/Contact.scss';

import Button from './Button';
import '../sass/Button.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact u-margin-top-section" id="contact">

        <h2 className="headline--section"><span className="headline--section-number">03.</span>Contact</h2>

        <div className="contact__container u-margin-top-small">

          <div className="contact__email">
            <div className="contact__email--preface">
              Shall we geek out about your new project? Good copy? Doctor Who? I weirdly love getting emails.
            </div>
            <div className="u-margin-top-small">
              <Button btnText="lisashantisiva@gmail.com" btnLink="mailto:lisashantisiva@gmail.com" type="large"/>
            </div>
          </div>

          <ul className="contact__links">
            <a className="contact__link" href="https://www.linkedin.com/in/lisa-siva/">
              <li><span className="contact__social-icon contact__social-icon--linkedin"></span>LinkedIn</li>
            </a>
            <a className="contact__link" href="https://github.com/lisasiva">
              <li><span className="contact__social-icon contact__social-icon--github"></span>Github</li>
            </a>
          </ul>

          <div className="contact__icon">
          </div>

        </div>
      </div>
    )
  }
}

export default Contact;
