import './styles.css';
import React, { PureComponent } from 'react';

export default class HamburgerNav extends PureComponent {
  state = {
    isMenuOpen : false,
  }

  getRootClasses = () => `HamburgerNav ${this.state.isMenuOpen ? 'HamburgerNav-isOpen' : ''}`

  handleClick = (event) => {
    event.preventDefault();
    this.setState({ isMenuOpen : !this.state.isMenuOpen });
  }

  render() {
    return (
      <div className={ this.getRootClasses() }>
        <a
          className="HamburgerNav-Hamburger"
          href="/"
          onClick={ this.handleClick }
        >
  				<div className="HamburgerNav-Icon"></div>
  			</a>

        <nav className="HamburgerNav-Menu">
  				<ul>
  					<li><a href="/portfolio"><span className="fa fa-briefcase"></span> See My Work</a></li>
  					<li><a href="mailto:potterbm@gmail.com"><span className="fa fa-envelope"></span> Email Me</a></li>
  					<li><a href="http://github.com/potterbm"><span className="fa fa-github"></span> Github Profile</a></li>
  					<li><a href="http://dribbble.com/potterbm"><span className="fa fa-dribbble"></span> Dribble Shots</a></li>
  				</ul>
  			</nav>
      </div>
    );
  }
}
