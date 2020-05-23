import React from 'react';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playersData';

import Players from '../Players/Players';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('could not get players', err));
  }

  render() {
    const { players } = this.state;

    const makePlayers = players.map((player) => <Players key={player.id} player={player}/>);

    return (
      <div className="Team">
        <h1>Welcome to the Holyhead Harpies Roster</h1>
        <div className="holyhead-harpies d-flex flex-wrap">
        {makePlayers}
        </div>
      </div>
    );
  }
}

export default Team;
