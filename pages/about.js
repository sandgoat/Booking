import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Ryan Grant - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>My name is Ryan Grant, I am an experienced Front End Developer. </p>
                <p>
                I have a Bachelor's Degree in Small Business Management and several years of experience working
                on a wide range of frontend technologies for modern mobile and web applications. I am experienced in working 
                on the various phases of Software Development Life Cycle like requirements analysis, design, coding, 
                testing, debugging, and maintaining for over 15 websites.
                </p>
                <p>
                As a lifelong athlete, I have an extensive history working in teams, communicating effectively, and 
                I work well under pressure, whether among people or inside the code editor. 
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;
