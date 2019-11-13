import React from 'react';
import '../sass/Projects.scss';
import ProjectCard from './ProjectCard';
import Button from './Button';
import '../sass/Button.scss';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {id: 0, url: 'https://github.com/lisasiva/snooze-it', style: 'project--0', type: 'Mobile web app', title: 'HeyHon', description:`HeyHon is a serverless CRUD app, built with AWS. Think of it like an issue queue for couples: You can create an account and save important discussions for later. `, stack: ['JS', 'AWS Lambda', 'DynamoDB']},
        {id: 1, url: 'https://github.com/lisasiva/conway-game-of-life', style: 'project--1', type: 'Game interface', title: 'Game of Life', description: `This is the interface I designed to run a simple version of Conway's Game of Life. The game board, which can be resized, was built with CSS grid.`, stack: ['JS', 'SCSS', 'CSS Grid']},
        {id: 2, url: 'https://github.com/lisasiva/lisasiva.github.io', style: 'project--2', type: 'Personal website', title: 'lisasiva.com', description: 'For this first iteration of my personal website, I kept the layout minimal, with plenty of white space. My primary goal was to get comfortable with flexbox.', stack: ['JS', 'SCSS', 'Flexbox']}
      ]
    }
  }

  getProjects(projects) {
    return projects.map(project => {
      return <ProjectCard key={project.id} url={project.url} style={`project ${project.style}`} image={project.image} type={project.type} title={project.title} description={project.description} stack={project.stack} />
    })
  }

  render() {
    return (
      <div className="projects u-margin-top-section" id="projects">
        <h2 className="headline--section"><span className="headline--section-number">02.</span>Work</h2>
        <div className="projects__container u-margin-top-large">
          {this.getProjects(this.state.projects)}
        </div>
        <div className="u-text-align-center">
          <Button btnText="See more on Github" btnLink="https://github.com/lisasiva/" type="medium"/>
        </div>
      </div>
    )
  }
}

export default Projects;
