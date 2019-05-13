import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Routes = () => (
  <Switch>
    <Route exact path="/" component = { Home } />
    <Route path="/about" component = { About } />
    <Route path="/projects" component = { Projects } />
    <Route path="/resume" component = { Resume } />
    <Route path="/contact" component = { Contact } />
  </Switch>
)

export default Routes;
