import { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Head />
      <Switch>
        <Route path="/page2">
          <SecondPage />
        </Route>
        <Route path="/page1">
          <FirstPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

const Head = () => {
  const pagesPaths = [
    ["/", "메인"],
    ["/page1", "페이지1"],
    ["/page2", "페이지2"],
  ];

  return (
    <nav>
      <ul>
        {pagesPaths.map(([pagePath, pageName]) => (
          <li>
            <Link to={pagePath}>{pageName}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SecondPage = () => {
  return <h1>두번째 페이지</h1>;
};

const FirstPage = () => {
  return <h1>첫 페이지</h1>;
};

const HomePage = () => {
  return <h1>홈 페이지</h1>;
};
export default App;
