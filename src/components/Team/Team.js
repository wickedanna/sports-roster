import React from 'react';

import Players from '../Players/Players';

import './Team.scss';

class Team extends React.Component {
  render() {
    return (
      <div className="Team">
        <h1>Welcome to the Holyhead Harpies Roster</h1>
        <Players />
      </div>
    );
  }
}

export default Team;
