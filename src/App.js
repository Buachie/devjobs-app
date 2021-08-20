import Navbar from "./components/Navbar";
import { SearchProvider } from "./contexts/SearchContext";
import "./scss/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import JobListing from "./components/JobListing";

const App = () => {
  return (
    <SearchProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/job/:id" component={JobListing} />
        </Switch>
      </Router>
    </SearchProvider>
  );
};

export default App;
