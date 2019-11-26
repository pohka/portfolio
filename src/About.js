import React, {Component} from "react"

class About extends Component
{
  render()
  {
    return(
      <div className="about-con">
        <section>
          <div className="about-info-con">
            <div className="about-left"></div>
            <div className="about-right">
            <h2>Geff Bourke</h2>
            <div>
              <div className="about-info">
                <div className="about-info-left">Location</div>
                <div>Clare, Ireland</div>
              </div>
              <div className="about-info">
                <div className="about-info-left">Education</div>
                <div>B.Sc in Computer Games Development</div>
              </div>
            </div>
            </div>
          </div>
        </section>
        <hr></hr>
        <section>
          <h2>Skills and Tools</h2>
          <div className="about-list-con">
            <div className="about-list">
              <h4>Frontend</h4>
              <ul>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>JQuery</li>
                <li>JSON</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="about-list">
              <h4>Backend</h4>
              <ul>
                <li>SQL</li>
                <li>Node.js</li>
                <li>AWS S3</li>
                <li>AWS EC2</li>
              </ul>
            </div>
            <div className="about-list">
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>JIRA</li>
                <li>Gerrit</li>
                <li>Github</li>
              </ul>
            </div>
            <div className="about-list">
              <h4>Languages</h4>
              <ul>
                <li>C++11</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Lua</li>
                <li>C#</li>
              </ul>
            </div>
          </div>
        </section>
        <hr></hr>
        <section>
        <h2>Education</h2>
        <h4>B.Sc in Computer Games Development</h4>
        <p>
          Studied from 2012-2016 in the <b>University of Limerick</b>. The course focused on to working in teams and build a strong <b>computer science</b> background while using Java for most projects. The main topics covered are as follows:
        </p>
        <ul>
          <li>Object Orientated Programming </li>
          <li>Software Design Patterns and Architecture </li>
          <li>SQL Databases</li>
          <li>Android Development</li>
          <li>Software Testing</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Multi-threaded Programming</li>
          <li>Event Driven Programming</li>
        </ul>
        </section>
      </div>
    );
  }
}

export default About;
