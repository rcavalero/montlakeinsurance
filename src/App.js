import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import What from "./pages/What";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/What" component={What} />
          <Route exact path="/Contact" component={Contact} />
      </div>
    </Router>

  );
}

export default App;
