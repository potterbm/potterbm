import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class HamburgerNav extends PureComponent {
  state = {
    isMenuOpen : false,
  }

  getRootClasses = () => [
    styles.HamburgerNav,
    this.state.isMenuOpen ? styles.isOpen : '',
  ].join(' ')

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ isMenuOpen : !this.state.isMenuOpen });
  }

  render() {
    return (
      <div className={ this.getRootClasses() }>
        <a
          className={ styles.Hamburger }
          href="/"
          onClick={ this.handleClick }
        >
          <div className={ styles.Icon } />
        </a>

        <nav className={ styles.Menu }>
          <ul>
            <li>
              <a href="/portfolio">
                <span className="fa fa-briefcase" /> See My Work
              </a>
            </li>

            <li>
              <a href="mailto:potterbm@gmail.com">
                <span className="fa fa-envelope" /> Email Me
              </a>
            </li>

            <li>
              <a href="http://github.com/potterbm">
                <span className="fa fa-github" /> Github Profile
              </a>
            </li>

            <li>
              <a href="http://dribbble.com/potterbm">
                <span className="fa fa-dribbble" /> Dribble Shots
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
