import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends React.Component {
  render() {
     return (
       <div style = {{width: '100%', margin: 'auto'}}>
          <Grid className="home-grid">
            <Cell col = { 12 }>
              <img
                src="https://curaflo.com/wp-content/uploads/2017/04/male-avatar1.png"
                alt="avatar"
                className="avatar-img"
              />
              <div className="banner-text">
                <h1>Full Stack Web Developer</h1>

                <hr/>

                <p>React | JavaScript | Java | C | Bootstrap | Terminal | NodeJS</p>

                <div className="social-links">

                  {/* LinkedIn */}
                  <a href="http://google.com" rel="noopener norederrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="http://google.com" rel="noopener norederrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

                </div>

              </div>
            </Cell>
          </Grid>
       </div>
     )
  }
}

export default Home;
