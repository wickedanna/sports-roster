import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-light bg-light">
           <span className="navbar-brand mb-0 h1">Holyhead Harpies</span>
           {
             authed
               ? <button className="btn btn-danger ml-auto" onClick={this.logMeOut}>Log Out</button>
               : ''
           }
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
