import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    return (
      <div className="container-fluid nav">
        <nav>
            <div className="NavbarHeader">


                  <NavLink exact to='/'> <span className="splash">Pog Blog</span></NavLink>


                  <NavLink exact to='/createpost'> <span className="splash">Create Post </span></NavLink>


                <NavLink exact to='/postlist'> <span className="splash">Show All Posts</span></NavLink>



            </div>
        </nav>
        {this.props.children}
        <footer>
          <span>
            <p>&copy; Pog Blog</p>
          </span>
        </footer>
      </div>
    );
  }
}
