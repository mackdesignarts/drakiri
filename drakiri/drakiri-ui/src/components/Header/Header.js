import React, { Component } from 'react'
import logo from '../../assets/img/logo.png'
import {
  NavItem,
  NavLink,
  Nav,
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
            <Col md="3">
              <div className="header-logo">
                LOGO MARKER <logo></logo>
              </div>
            </Col>
            <Col md="6">
              <Nav className="header-nav">
                <NavItem>
                  <NavLink to="/welcome" tag={Link}>
                    WELCOME TO DRAKIRI
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/news" tag={Link}>
                    NEWS & UPDATES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/info" tag={Link}>
                    GUIDES & INFO
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/activities" tag={Link}>
                    ACTIVITIES
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/nesting-grounds" tag={Link}>
                    NESTING GROUNDS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/forum" tag={Link}>
                    FORUM
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <div className="users-online">Users Online: { userCount }</div>
            </Col>
          </Row>
        </Container>
      </header>
    ) 
  }
}

export default Header