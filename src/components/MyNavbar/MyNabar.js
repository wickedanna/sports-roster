import React from 'react';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="MyNavbar">
        <nav class="navbar navbar-light bg-light">
           <span class="navbar-brand mb-0 h1">Holyhead Harpies</span>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
