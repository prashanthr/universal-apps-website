import React from 'react'
import LogoImg from '../client/assets/vector/default-monochrome.svg'
import './app.css'

const Logo = () => (
  <div className='universal-apps-logo'>
    <a href={'/'}>
      <img src={LogoImg} alt='logo' />
    </a>
  </div>
)

const Footer = () => (
  <div className='universal-apps-footer'>
    Copyright Universal Apps &copy; {(new Date().getFullYear())}
  </div>
)

function App() {
  return (
    <div>
      <Logo />
      <div className='slogan'>
        We build apps for the world.
      </div>
      <Footer />
    </div>
  );
}

export default App;
