import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Projects from './Components/Projects';
import Location from './Components/Location';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import Legal from './Components/Legal';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/nosotros" component={About} />
              <Route exact path="/productos" component={Products} />
              <Route exact path="/trabajos" component={Projects} />
              <Route exact path="/ubicacion" component={Location} />
              <Route exact path="/contacto" component={Contact} />
              <Route exact path="/legal" component={Legal} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
