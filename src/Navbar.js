import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component
{
  getNavItems()
  {
    var doms = [];
    for(var i=0; i<this.props.items.length; i++)
    {
      var item = this.props.items[i];
      doms.push(
        <li key={item.title}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      );
    }

    return doms;
  }

  render()
  {
    return(
      <nav>
        <div className="nav-con">
          {this.getNavItems()}
        </div>
      </nav>
    );
  }
}

export default Navbar;
