import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Projects } from "./components/Pages/Projects/Projects";
import { Skills } from "./components/Pages/Skills/Skills";
import { Contact } from "./components/Pages/Contact/Contact";
import { Resume } from "./components/Pages/Resume/Resume";
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
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;