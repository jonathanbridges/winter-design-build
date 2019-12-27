import React from 'react';
import {
  Route,
  BrowserRouter as Router,
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

function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0,0)}>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Slider />
            <Portfolio />
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
