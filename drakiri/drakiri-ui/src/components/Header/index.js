import React, { Component } from 'react'
import logo from '../../assets/img/logo-masthead.png'
import { Link } from "react-router-dom";
//import { users } from '../../services/users'
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'react-bootstrap'

/*
The Users Online counter:
                <NavItem className="">
                  <span className="users-online">USERS ONLINE: </span>
                  <span className="users-count"> { this.userCount }</span>
                </NavItem>
*/

class Header extends Component {
  constructor(props) {
    super(props)
    this.userCount = 123 //users.getUserCount
  }

  render() {
    return(
      <header className="header drakiri-header">
        <Container>
          <Row>
            <Col md="3">
              <div className="header-logo">
                <NavLink to="/" tag={ Link }>
                  <img src={ logo } alt="Logo" className="logo-masthead" />
                </NavLink>
              </div>
            </Col>
            <Col md="9">
              <Nav className="header-nav">
                <NavItem>
                  <NavLink to="/welcome" tag={ Link }>
                    Welcome to Drakiri
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/news" tag={ Link }>
                    News & Updates
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/info" tag={ Link }>
                    Guides & Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/activities" tag={ Link }>
                    Activities
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/nesting-grounds" tag={ Link }>
                    Nesting Grounds
                  </NavLink>
                </NavItem>
                <NavItem className="alt-font-green">
                  <NavLink to="/forum" tag={ Link }>
                    Forum
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </header>
    ) 
  }
}

export default Header