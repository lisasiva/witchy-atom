import React from 'react';

class ProjectCard extends React.Component {
  getTags(tags) {
    return tags.map((tag, index) => {
      return <div className="project__stack--tag" key={index}>{tag}</div>
    })
  }

  onProjectClick = event => {
    event.preventDefault();
    window.open(this.props.url);
  }

  render() {
    return (
      <div className={this.props.style} onClick={this.onProjectClick}>
        <div className="project__image-box">
        </div>
        <div className="project__content">
          <div className="project__title">{this.props.title}</div>
          <div className="project__type">{this.props.type}</div>
          <div className="project__description">{this.props.description}</div>
          <div className="project__stack">
            {this.getTags(this.props.stack)}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
