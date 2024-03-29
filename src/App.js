import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './components/Routes';
import {Link} from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "demo-big-content" >
        <Layout>
          <Header className="header-color" title = {<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll >
            <Navigation >
              <Link to = "/about" > About < /Link>
              <Link to = "/projects" > Projects < /Link>
              <Link to = "/resume" > Resume < /Link>
              <Link to = "/contact" > Contact < /Link>
            </Navigation>
          </Header>

          <Drawer title = {<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>} >

            <Navigation >
              <Link to = "/about" > About < /Link>
              <Link to = "/projects" > Projects < /Link>
              <Link to = "/resume" > Resume < /Link>
              <Link to = "/contact" > Contact < /Link>
            </Navigation>
          </Drawer>
          <Content >
      <div className = "page-content" / >
      <Routes />
      </Content>
      </Layout>
      </div>
    );
  }
}

export default App;
