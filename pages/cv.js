import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class Cv extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage title="Resume Preview" className="cv-page">
          <Row>
            <Col md={{size: 8, offset: 2}}>
              <div className="cv-title">
                <a download="https://s3.amazonaws.com/bazaarly/Resume+of+Ryan+Grant.pdf" className="btn btn-success" href="https://s3.amazonaws.com/bazaarly/Resume+of+Ryan+Grant.pdf">
                  Download
                </a>
              </div>
              <iframe style={{width: '100%', height: '800px'}} src="https://s3.amazonaws.com/bazaarly/Resume+of+Ryan+Grant.pdf">
              </iframe>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Cv;
