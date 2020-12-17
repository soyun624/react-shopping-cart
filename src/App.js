import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
   <div className="wrapper">
          <header>
            <div className="header-title">
              <h1>Dv Technologies</h1>
            </div>
            <div className="nav-button" id="nav-button"> 
              <i className="fas fa-bars" />
              <span className="sr-only">Menu</span>
            </div>
            <nav>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </header>
          <main>
            <section className="first-content">
              <div className="content-image">
                <img src="images/500x500.png" alt="Dan Vergara" />
              </div>
              <article>
                <p>I am a UX/UI Designer, Web Developer and Systems Engineer with experience in IT Management. 
                  During my job experience I was in charge to follow-up different kind of solutions
                  to implement and launch for internal and external users, that allowed me to work 
                  near development teams and helped me to develop skills to be a problem solving,
                  team player, leadership and promote a collaborative environment.</p>
              </article>
            </section>
            <section>
              <h2>Services</h2>
              <article className="services">
                <div className="services-item services-item-01">
                  {/*img src="images/UXUIdesign.jpg" alt="UX/UI Design"*/}
                  <a href="#" data-title="UX/UI Design"><img src="images/UXUIdesign.jpg" alt="UX/UI Design" /></a>
                </div>
                <div className="services-item services-item-02">
                  {/*img src="images/webdevelopment.png" alt="Web Development"*/}
                  <a href="#" data-title="Web Development"><img src="images/webdevelopment.png" alt="Web Development" /></a>
                </div>
                <div className="services-item services-item-03">
                  {/*img src="images/projectmanagement.jpg" alt="Project Management"*/}
                  <a href="#" data-title="Project Management"><img src="images/projectmanagement.jpg" alt="Project Management" /></a>
                </div>
              </article>
            </section>
          </main>
          <footer>
            <span>Let's connect:</span>
            <ul>
              <a href="https://www.linkedin.com/in/dan-arom-vergara-castillo/" target="_blank"><i className="fab fa-linkedin" /></a>
              <a href="https://dan-vergara.webflow.io" target="_blank"><i className="fas fa-globe" /></a>
            </ul>
          </footer>
        </div>
    </div>
  );
  }
}

export default App;
