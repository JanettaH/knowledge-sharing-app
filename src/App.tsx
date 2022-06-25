import ToolsPage from "./components/ToolsPage/ToolsPage";
import { HomePage } from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RewardsPage from "./components/RewardsPage/RewardsPage";
import { ResourcesPage } from "./components/ResourcesPage/ResourcesPage";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import Leaderboard from "./components/LeaderboardPage/LeaderboardPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/tools" component={ToolsPage} />
          <Route exact path="/rewards" component={RewardsPage} />
          <Route exact path="/resources" component={ResourcesPage} />
          <Route exact path="/leaderboard" component={Leaderboard} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
