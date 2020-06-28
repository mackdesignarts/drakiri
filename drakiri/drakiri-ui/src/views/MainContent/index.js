import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

class MainContent extends Component {
  render() {
    return(
      <Container className="main-content">
        <Row>
          <Col md="8">
            <div className="main-article">
              <span className="italics-header-small green-text"><i>Welcome to</i></span>
              <h3 className="serif-font-header">
                The Magical World of Drakiri
              </h3>
              <p className="main-article-text">
                Lorem ipsum bacon star wars monty python spam. Filet mignon leberkas short ribs sirloin buffalo, andouille jowl venison pork loin. Andouille ball tip pork chop.
              </p>
              <button type="button" class="btn btn-primary green-text">PLAY NOW!</button>
            </div>
            <div className="character-inset"></div>
          </Col>
          <Col md="4">
            <div className="about-content">
              <h5 className="serif-font-header">Learn About Drakiri</h5>
              <p className="about-article-text">
                Lorem ipsum bacon star wars monty python spam. Filet mignon leberkas short ribs sirloin buffalo. Andouille ball tip pork chop.
              </p>
              <p className="about-article-text">
                Lorem ipsum bacon star wars monty python spam, et fin filet mignon.
              </p>
              <button type="button" class="btn btn-primary btn-alt-primary">GET STARTED!</button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainContent