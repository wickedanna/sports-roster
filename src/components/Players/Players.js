import React from 'react';

import playerShape from '../../helpers/propz/playerShape';

import './Players.scss';

class Players extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="Players my-2 col-3">
        <div className="card">
          <img className="card-img-top" src={player.imageUrl} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Players;
