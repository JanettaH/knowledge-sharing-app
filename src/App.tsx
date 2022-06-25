import React from 'react';
import ToolsPage from './components/ToolsPage/ToolsPage';
import { HomePage } from './components/HomePage/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RewardsPage from './components/RewardsPage/RewardsPage';

function App() {
  return (

    <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/tools" component={ToolsPage} />
            <Route exact path="/rewards" component={RewardsPage} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
