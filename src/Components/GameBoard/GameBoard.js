import React, { Component } from 'react';
import { connect } from 'react-redux';
import './GameBoard.css';

class GameBoard extends Component {
  componentDidMount() {

  }
  componentWillReceiveProps() {

  }
  render() {
    let players;
    if (this.props.players) {
      players = this.props.players;
    }
    return (
      <main>
        {players}
      </main>
    )
  }
}
function mapStateToProps(state) {
  return {
    players: state.players
  }
} 
export default connect(mapStateToProps)(GameBoard);