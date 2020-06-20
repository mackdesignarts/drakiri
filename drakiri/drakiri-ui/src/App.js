import React from 'react'
import 'assets/css/style.css'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Root>
        <Header></Header>
        <Hero>
          <QuickUpload></QuickUpload>
          <LoginModule></LoginModule>
        </Hero>
        <MainContent></MainContent>
        <Footer></Footer>
      </Root>
    </Router>
  );
}

export default App;
