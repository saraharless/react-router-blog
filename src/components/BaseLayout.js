import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    return (
      <div className="container-fluid nav">
        <nav>
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="navbar-nav">
                <li>

                  <NavLink exact to='/'> <span className="splash">PollyBlog</span></NavLink>

                </li>
                <li>

                  <NavLink exact to='/createpost'> <span className="splash">Create Post </span></NavLink>

                </li>
                <li>

                <NavLink exact to='/postlist'> <span className="splash">Show All Posts</span></NavLink>

                </li>


              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer>
          <span>
            PollyBlog
          </span>
        </footer>
      </div>
    );
  }
}
