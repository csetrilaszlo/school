import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/Pages/About/About";
import { Skills } from "./components/Pages/Skills/Skills";
import { Contact } from "./components/Pages/Contact/Contact";
import { Resume } from "./components/Pages/Resume/Resume";
import { Home } from "./components/Pages/Home/Home";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/about" component={About} />
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