import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ChatApp from "./ChatApp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
      <Switch>
        {/* / means home directory */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/chat">
          <ChatApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
