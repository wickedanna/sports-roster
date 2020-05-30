import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
    putPlayer: PropTypes.func.isRequired,
    player: PropTypes.object.isRequired,
  }

  state = {
    playerName: '',
    playerImage: '',
    playerPosition: '',
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        playerName: player.name,
        playerImage: player.imageUrl,
        playerPosition: player.position,
        isEditing: true,
      });
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImage: e.target.value });
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { playerName, playerPosition, playerImage } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {
      name: playerName,
      position: playerPosition,
      imageUrl: playerImage,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  updatePlayer = (e) => {
    e.preventDefault();
    const { player, putPlayer } = this.props;
    const { playerName, playerPosition, playerImage } = this.state;
    const updatedPlayer = {
      name: playerName,
      position: playerPosition,
      imageUrl: playerImage,
      uid: authData.getUid(),
    };
    putPlayer(player.id, updatedPlayer);
  }

  render() {
    const {
      playerName,
      playerImage,
      playerPosition,
      isEditing,
    } = this.state;

    return (
      <div className="PlayerForm">
        <form className="col-6 offset-3 bg-light p-3">
          <div className="form-group">
            <label htmlFor="player-name">Email address</label>
            <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Player Name"
            value={playerName}
            onChange={this.nameChange}/>
         </div>
         <div className="form-group">
            <label htmlFor="player-position">Position</label>
            <input
            type="text"
            className="form-control"
            id="player-position"
            placeholder="Position"
            value={playerPosition}
            onChange={this.positionChange}/>
        </div>
        <div className="form-group">
            <label htmlFor="player-image">Image URL</label>
            <input
            type="text"
            className="form-control"
            id="player-image"
            placeholder="Image"
            value={playerImage}
            onChange={this.imageChange}/>
        </div>
        {
          isEditing
            ? <button type="submit" className="btn btn-dark" onClick={this.updatePlayer}>Update Player</button>
            : <button type="submit" className="btn btn-dark" onClick={this.savePlayer}>Save Player</button>
        }
      </form>
      </div>
    );
  }
}

export default PlayerForm;
