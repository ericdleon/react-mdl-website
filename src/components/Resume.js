import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends React.Component {
  render() {
     return (
       <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="avatar"
              style={{height: '200px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Eric Deleon</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <p>Lorem Ipsum</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>MyWebsite.com</p>

            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>


          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2012}
              endYear={2018}
              schoolName= "My University"
              schoolDescription = "Lorem Ipsum"
            />

            <Education
              startYear={2012}
              endYear={2018}
              schoolName= "My University"
              schoolDescription = "Lorem Ipsum"
            />

            <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Experience</h2>

          <Experience
            startYear={2012}
            endYear={2018}
            jobName= "My University"
            jobDescription = "Lorem Ipsum"
          />

          <Experience
            startYear={2012}
            endYear={2018}
            jobName= "My University"
            jobDescription = "Lorem Ipsum"
          />

            <hr style={{borderTop: '3px solid #e22947'}} />

          <h2>Skills</h2>

          <Skills
            skill="JavaScript"
            progress="100"
          />

          <Skills
            skill="HTML/CSS"
            progress="75"
          />

          <Skills
            skill="NodeJS"
            progress="50"
          />

          <Skills
            skill="React"
            progress="25"
          />

          </Cell>
        </Grid>
       </div>
     )
  }
}

export default Resume;
