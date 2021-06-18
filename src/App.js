import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage.component';

import './pages/homepage.styles.scss'
import './App.css';

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={HomePage} />
        </Switch>
    </div>
  );
}

export default App;
