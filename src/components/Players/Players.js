import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

import './Players.scss';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editAPlayer, player } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Players my-2 col-3">
        <div className="card player-cards">
          <img className="card-img-top" src={player.imageUrl} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <button className="btn btn-danger" onClick={this.deletePlayerEvent}><i className="fas fa-trash"></i></button>
          <button className="btn btn-warning" onClick={this.editPlayerEvent}><i className="fas fa-pencil-alt"></i></button>
        </div>
        </div>
      </div>
    );
  }
}

export default Players;
