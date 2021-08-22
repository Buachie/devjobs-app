import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext";
import "./scss/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import JobListing from "./components/JobListing";

const App = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/job/:id" component={JobListing} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
