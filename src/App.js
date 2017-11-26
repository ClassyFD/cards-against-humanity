import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cards from './Components/Cards/Cards';
import Landing from './Components/Landing/Landing';
import GameBoard from './Components/GameBoard/GameBoard';
import Profile from './Components/Profile/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/Board' component={GameBoard}/>
          <Route path='/Cards' component={Cards}/>
          <Route path='/Profile' component={Profile}/>
        </Switch>
      </div>
    );
  }
}
export default App;
