import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import footerLogo from '../../assets/img/logo-matte.png'
import drakiriIcon from '../../assets/img/drakiri-icon.png'



class Footer extends React.Component {
  
  constructor(props) {
    super(props);
    this.currentYear = new Date().getFullYear()
  }

  render() {
    return (
      <footer className="footer">
              <div className="footer-logo">
                <img src={ footerLogo } />
                <span className="footer-copyright">
                  Copyright &copy; { this.currentYear } Drakiri Inc.
                </span>
              </div>
              <Nav className="footer-nav">
                <NavItem>
                  <NavLink to="/welcome" tag={Link}>
                    Welcome to Drakiri
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/terms-of-use" tag={Link}>
                    Terms of Use
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/privacy-policy" tag={Link}>
                    Privacy Policy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/activities" tag={Link}>
                    Activities
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/nesting-grounds" tag={Link}>
                    Nesting Grounds
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/support" tag={Link}>
                    Support
                  </NavLink>
                </NavItem>
              </Nav>
              <div className="footer-icon">
                <img src={ drakiriIcon } />
              </div>
      </footer>
    )
  }
}

export default Footer