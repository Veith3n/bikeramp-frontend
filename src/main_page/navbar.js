import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'


class NavbarMain extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Bikeramp</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li>
              <NavLink className="nav-link" activeClassName='active' to="/"> Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/newTrip">New Trip</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/monthlyStats">Monthly Stats</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' to="/weeklyStats">Weekly Stats</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}

export default NavbarMain;