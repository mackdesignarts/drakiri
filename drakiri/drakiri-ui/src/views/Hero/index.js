import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import uploader from '../../assets/img/upload-icon.png'
import dragonIcon from '../../assets/img/icon-user2.png'
import lockIcon from '../../assets/img/icon-lock2.png'
import discordIcon from '../../assets/img/icon-discord.png'

class Hero extends Component {
  render() {
    return(
      <Container className="hero">
        <Row>
          <Col md="10">
            <div className="hero-content">
              <a href=""><img src={ uploader } /></a>
              <div className="hero-text">
                <h4>Drag and drop to upload image</h4>
                <span className="hero-subtext">Or <a href="">browse</a> to choose a file.</span>
              </div>
            </div>
          </Col>
          <Col md="2">
            <div className="login-panel">
              <h5>Log In / Register</h5>
              <div className="">
                <img src={ dragonIcon } /><input type="text" id="login" class="fadeIn second" name="login" placeholder="Username" />
              </div>
              <div className="">
                <img src={ lockIcon } /><input type="password" id="password" class="fadeIn third" name="login" placeholder="Password" />
              </div>
              <button type="button" class="btn btn-primary">LOGIN</button>
              <br />
              <span className="login-subtext">or <a href="" >Create Account</a></span>
              <div className="login-bottom-text">
                JOIN US ON DISCORD! &nbsp;&nbsp;<a href="" target="blank"><img src={ discordIcon } className="discord-icon" /></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Hero