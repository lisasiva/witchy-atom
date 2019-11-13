import React from 'react';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="content">
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
