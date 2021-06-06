import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Introduction } from './content/Introduction/Introduction';
import { Instruction } from './content/Instruction/Instruction';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Game } from './content/Game/Game.jsx';

import './style.css';
import { Results } from './content/Results/Results';

const App = () => {
  const [moveToResult, setMoveToResult] = useState(null);
  const [playerName, setPlayerName] = useState('');

  const handleMoveToResult = (props) => {
    setMoveToResult(props);
  };

  const handleName = (name) => {
    setPlayerName(name);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Introduction />
        </Route>
        <Route path="/instrukce" exact>
          <Instruction onPlayerName={handleName} />
        </Route>
        <Route path="/results" exact>
          <Results name={playerName} />
        </Route>
        <Route path="/hra" exact>
          {moveToResult === null || moveToResult.length > 0 ? (
            <Game onMoveToResult={handleMoveToResult} />
          ) : (
            <Redirect to="/results" />
          )}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.querySelector('#app'));
