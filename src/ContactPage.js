import React, {Component} from "react"
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

class ContactPage extends Component
{
  downloadClick()
  {
    var link = document.createElement('a');
    link.href = "./geff_bourke_resume.pdf";
    link.download = 'geff_bourke_resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

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
            <Fade left>
              <a href="https://github.com/pohka" target="_blank"><FaGithub /></a>
            </Fade>
            <Fade right>
              <a href="https://www.linkedin.com/in/geff-bourke-91b238115/" target="_blank"><FaLinkedinIn /></a>
            </Fade>
          </div>
          <hr></hr>
          <div className="button" onClick={this.downloadClick}>Download Resume</div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
