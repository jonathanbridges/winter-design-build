import React from 'react';
import {
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';

import Header from './components/header';
import Slider from './components/slider';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollToTop from './components/scrolltotop';

import Woodworking from './components/portfolio_details/woodworking';
import Cabinetry from './components/portfolio_details/cabinetry';
import TrimCabinetry from './components/portfolio_details/trim_cabinetry';
import Renovation from './components/portfolio_details/renovation';
import Design from './components/portfolio_details/design';
import Art from './components/portfolio_details/art';
import AshAndSteelKitchenIsland from './components/portfolio_details/ash_and_steel_kitchen_island';

function App() {
  return (
    <HashRouter basename='/' onUpdate={() => window.scrollTo(0,0)}>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Slider />
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/woodworking">
            <Woodworking />
          </Route>
          <Route path="/cabinetry">
            <Cabinetry />
          </Route>
          <Route path="/trim-cabinetry">
            <TrimCabinetry />
          </Route>
          <Route path="/renovation">
            <Renovation />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/art">
            <Art />
          </Route>
          <Route path="/ash-and-steel-kitchen-island">
            <AshAndSteelKitchenIsland />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
