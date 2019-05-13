import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab:0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Angular Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Angular Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>Angular Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>VueJS Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>VueJS Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>VueJS Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>MongoDB Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>MongoDB Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>MongoDB Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, in duo illud novum appetere, quas praesent duo cu, no mutat mollis delicatissimi pri.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
            <Button colored>CodePen</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }
  }


  render() {
     return (
       <div className="category-tabs">
        <Tabs activeTab ={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()} </div>
            </Cell>
          </Grid>

       </div>
     )
  }
}

export default Projects;
