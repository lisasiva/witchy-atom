import React from 'react';
import '../sass/About.scss';

class AboutTag extends React.Component {
  render() {
    return (
      <div className={this.props.style}>
        <div className="tag__icon"></div>
        <div className="tag__title">{this.props.title}</div>
      </div>
    )
  }
}

export default AboutTag;
