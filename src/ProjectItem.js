import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';

class ProjectItem extends Component
{
  getButtons()
  {
    var arr = [];

    for(var key in this.props.links)
    {
      var link = this.props.links[key];
      var text = "--";
      if(key === "code")
      {
        text = "View Code";
      }
      else if(key === "site")
      {
        text = "Live Site";
      }
    
      arr.push(
        <a href={link} key={key} target="_blank">{text}</a>
      )
    }

    return (<div className="project-item-buttons">{arr}</div>);
  }

  getMedia()
  {
    return(
      <div className="project-item-media">
        <img src={this.props.imgs[0]}></img>
      </div>
    );
  }

  render()
  {
    return(
      <div className="project-item-con">
        {this.getMedia()}
        <div className="project-item-info-con">
          <div className="project-item-about">
            <h2>{this.props.title}</h2>
            <div className="project-item-desc">
              <Markdown>{this.props.desc}</Markdown>
            </div>
            <div className="project-item-date"><i>{this.props.date}</i></div>
          </div>
          {this.getButtons()}
        </div>
      </div>
    );
  }
}

export default ProjectItem;
