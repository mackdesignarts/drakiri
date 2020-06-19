import React, { Component } from 'react'
import logo from 'assets/img/logo.png'
import { 
  Container, 
  Row, 
  Col
} from 'react-bootstrap'




class Header extends Component {
  render() {
    return(
      <header className="header drakiri-header">
        <Container>
          <Row>
            <Col>test 1</Col>
            <Col>test 2</Col>
            <Col>test 4</Col>
          </Row>
        </Container>
      </header>
    ) 
  }
}

export default Header