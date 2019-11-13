import React from 'react';
import '../sass/utilities.scss';
import '../sass/About.scss';
import Tag from './AboutTag';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tags: ['Martial artist', 'Potterhead', 'Bookworm'] };
  }

  getTags(tags) {
    return tags.map((tag, index) => {
      return <Tag key={index} style={`about__tag about__tag--${index}`} title={tag} />
    })
  }

  render() {
    return (
      <div className="about u-margin-top-section" id="about">
        <h2 className="headline--section"><span className="headline--section-number">01.</span>About Me</h2>
        <div className="about__container u-margin-top-large">
          <div className="about__image-box">
            <div className="about__image"></div>
          </div>
          <div className="about__content">
            <p className="about__bio">
            I’m a coder who <span className="about__bio--highlighted">writes copy</span> and <span className="about__bio--highlighted">talks to users</span>. Having spent four years growing startups—including one of my own—I believe that everything starts with talking to the people you’re designing for. I believe in using their words to inform their copy; their fears and hopes to inform the product. I believe in building things that make users whisper, awestruck, <span className="about__bio--highlighted">“How did you know?”</span>
            </p>
            <h3 className="about__interests">I'm also a proud...</h3>
            <div className="about__tags u-margin-top-small">
              {this.getTags(this.state.tags)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
