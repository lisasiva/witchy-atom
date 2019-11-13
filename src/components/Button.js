import React from 'react';
import '../sass/Button.scss';
import '../sass/utilities.scss';


class Button extends React.Component {
  render() {
    return (
      <a href={this.props.btnLink} className={`button button--${this.props.type}`}>
        {this.props.btnText} <span className="button__text--arrow">&rarr;</span>
      </a>
    )
  }
}

export default Button;
