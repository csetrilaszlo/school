import { NavBar } from "./components/NavBar/NavBar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Projects } from "./components/Pages/Projects/Projects";
import { Skills } from "./components/Pages/Skills/Skills";
import { Contact } from "./components/Pages/Contact/Contact";
import { Home } from "./components/Pages/Home/Home";

import "./App.css";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;