import React from 'react';

import authData from '../../helpers/data/authData';
import playerData from '../../helpers/data/playersData';

import Players from '../Players/Players';
import PlayerForm from '../PlayerForm/PlayerForm';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }

  getInfo = () => {
    playerData.getPlayersByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('could not get players', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  removePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getInfo())
      .catch((err) => console.error('could not delete player', err));
  }

  saveNewPlayer = (newPlayer) => {
    playerData.savePlayer(newPlayer)
      .then(() => {
        this.getInfo();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('could not save player', err));
  }

  render() {
    const { players, formOpen } = this.state;

    const makePlayers = players.map((player) => <Players key={player.id} player={player} removePlayer={this.removePlayer}/>);

    return (
      <div className="Team">
        <h1>Welcome to the Holyhead Harpies Roster</h1>
        <button className="btn btn-dark" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-plus"></i></button>
        { formOpen ? <PlayerForm saveNewPlayer={this.saveNewPlayer}/> : '' }
        <div className="holyhead-harpies d-flex flex-wrap">
        {makePlayers}
        </div>
      </div>
    );
  }
}

export default Team;
