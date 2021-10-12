import { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/first">FirstPage</Link>
          </li>
          <li>
            <Link to="/second">SecondPage</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/first">
          <FirstPage />
        </Route>
        <Route path="/second">
          <SecondPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

const HomePage = () => {
  return <h1>home page</h1>;
};
const FirstPage = () => {
  return <h1>1 page</h1>;
};

const SecondPage = () => {
  return <h1>2 page</h1>;
};

export default App;
