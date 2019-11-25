import React, {Component} from "react"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

class ContactPage extends Component
{
  render()
  {
    return(
      <div className="about-con">
        <h1>Contact</h1>
        <div className="contact">
          <div>
            <h2>Email</h2>
            <p>geffbourke123@gmail.com</p>
          </div>
          <hr></hr>
          <div className="social-con">
            <a href="https://github.com/pohka" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/geff-bourke-91b238115/" target="_blank"><FaLinkedinIn /></a>
          </div>
          <hr></hr>
          <div className="button">Download Resume</div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
