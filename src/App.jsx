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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/userList">UserList</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/userList">
          <UserListPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

const HomePage = () => {
  return <h1>Home</h1>;
};

const AboutPage = () => {
  return <h1>About</h1>;
};

const UserListPage = () => {
  return <h1>UserList</h1>;
};

export default App;
