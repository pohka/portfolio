import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import ProjectItem from "./ProjectItem";
import AboutPage from "./About";
import ContactPage from "./ContactPage"
import Footer from "./Footer";

function App() {
  console.log("This is a SPWA created by Geff Bourke ")

  var pages = [
    {
      title : "Home",
      path : "/"
    },
    {
      title : "Projects",
      path : "/projects"
    },
    {
      title : "Contact",
      path : "/contact"
    }
  ];


  return (
    <Router>
      <Navbar items={pages}></Navbar>
      <div className="content-con">
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

function Home() {
  return <AboutPage></AboutPage>;
}

function Projects() {

  var projects = [
    {
      title : "Dota Tools Web App",
      desc : "Single page web application with an API viewer, tools and guides\n\n- React.js\n- Javascript\n- Responsive CSS\n- SPWA\n- Markdown parser for code blocks\n- Custom routing",
      imgs : ["https://i.imgur.com/vJRkoN3.png"],
      links : {
        code : "https://github.com/pohka/githubpages-repo",
        site : "https://pohka.github.io/dota/"
      },
      date : "Nov 2019"
    },
    {
      title : "CoolDownFeed",
      desc : "Blog and infographics\n\n- JQuery\n- JavaScript\n- HTML + CSS\n- Comment section using Disqus",
      imgs : ["https://i.imgur.com/hq70XYY.png"],
      links : {},
      date : "Jun 2017 - Nov 2017"
    },
    {
      title : "Fibers",
      desc : "A threading pool library with a scheduler\n\n- C++11\n- Multi-threading\n- Concurrent atomic data structures\n- Single process uses worker threads and schedules tasks onto allocated memory called fibers",
      imgs : ["https://i.imgur.com/TqY5FSD.jpg"],
      links : {
        code : "https://github.com/pohka/Fibers"
      },
      date : "Jan 2016 - Apr 2016"
    },
    {
      title : "Arena of Clarity",
      desc : "A multiplayer battle arena game mode created using Dota 2 custom game tools and Lua\n\n- Custom Abilities\n- Custom Physics System\n- Particles\n- Source 2 Engine",
      imgs : ["https://i.imgur.com/pDM18TL.jpg"],
      links : {
        code : "https://github.com/pohka/arena-of-clarity"
      },
      date : "Oct 2019"
    },
    {
      title : "Rapidless",
      desc : "Racing game made with Unity\n\n- C#\n- Unity\n- Arcade style car physics\n- AI Drivers",
      imgs : ["https://i.imgur.com/B6SK0Pp.jpg"],
      links : {

      },
      date: "Jun 2018"
    }
  ];

  var doms = [];
  for(var i=0; i<projects.length; i++)
  {
    var key = "project-" + i;
    doms.push(
      <ProjectItem 
        key={key}
        title={projects[i].title}
        desc={projects[i].desc}
        imgs={projects[i].imgs}
        links={projects[i].links}
        date={projects[i].date}
      ></ProjectItem>
    )
  }

  return(
    <div>
      <h1>Projects</h1>
      {doms}
    </div>
  );
}

function Contact() {
  return <ContactPage></ContactPage>;
}

export default App;
