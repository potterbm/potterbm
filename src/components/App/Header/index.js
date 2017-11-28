import './styles.css';
import HamburgerNav             from './HamburgerNav';
import Logo                     from './Logo';
import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  render() {
    return (
      <header className="Header">
        <HamburgerNav />

        <nav className="social left">
  				<a href="mailto:potterbm@gmail.com"><span className="fa fa-envelope"></span></a>
          <a href="http://github.com/potterbm"><span className="fa fa-github"></span></a>
          <a href="http://dribbble.com/potterbm"><span className="fa fa-dribbble"></span></a>
  			</nav>

        <a href="/" className="LogoWrapper">
          <Logo />
        </a>
      </header>
    );
  }
}
