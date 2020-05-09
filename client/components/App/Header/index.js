import { Link }                 from 'react-router-dom';
import Hamburger                from './Hamburger';
import Logo                     from './Logo';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Header extends PureComponent {
  static propTypes = {}

  state = {
    isExpanded : false,
  }

  toggleExpanded = () => this.setState((state) => ({ isExpanded : !state.isExpanded }))

  getNavClasses = () => [
    styles.Nav,
    this.state.isExpanded ? styles.isExpanded : '',
  ].join(' ')

  render() {
    return (
      <div className={ styles.Root }>
        <div className={ styles.Logo }>
          <Logo />
        </div>

        <nav className={ this.getNavClasses() }>
          <Hamburger
            className={ styles.Hamburger }
            isActive={ this.state.isExpanded }
            onClick={ this.toggleExpanded }
          />

        <Link className={ styles.Link } to="/portfolio">portfolio</Link>
        </nav>
      </div>
    );
  }
}
