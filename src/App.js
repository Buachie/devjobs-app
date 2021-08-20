import Navbar from "./components/Navbar";

import "./scss/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import JobListing from "./components/JobListing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/job/:id" component={JobListing} />
      </Switch>
    </Router>
  );
};

export default App;
