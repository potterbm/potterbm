import HamburgerNav             from './HamburgerNav';
import Logo                     from './Logo';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Header extends PureComponent {
  render() {
    return (
      <header className={ styles.Header }>
        <HamburgerNav />

        <nav className={ styles.Social }>
          <a href="mailto:potterbm@gmail.com"><span className="fa fa-envelope" /></a>
          <a href="http://github.com/potterbm"><span className="fa fa-github" /></a>
          <a href="http://dribbble.com/potterbm"><span className="fa fa-dribbble" /></a>
        </nav>

        <a href="/" className={ styles.LogoWrapper }>
          <Logo />
        </a>
      </header>
    );
  }
}
