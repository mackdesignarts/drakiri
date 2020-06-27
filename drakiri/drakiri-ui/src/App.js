import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './views/Hero'
import MainContent from './views/MainContent'

function App() {
  return (
    <Router>
      <Header></Header>
      <Hero></Hero>
      <MainContent></MainContent>
      <Footer></Footer>
    </Router>
  );
}

export default App;
