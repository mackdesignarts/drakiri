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



class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="2">
              <div className="footer-logo">LOGO MARKER</div>
            </Col>
            <Col md="2">
              <div className="footer-copyright">
                COPYRIGHT MARKER
              </div>
            </Col>
            <Col md="6" className="footer-nav">
              <Nav>
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
            </Col>
            <Col md="2">
              <Button className="footer-icon">
                FOOTER DRAGON ICON MARKER
              </Button>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer