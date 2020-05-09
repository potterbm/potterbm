import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Hamburger extends PureComponent {
  static propTypes = {
    className : PropTypes.string,
    isActive  : PropTypes.bool,
    onClick   : PropTypes.func,
  }

  static defaultProps = {
    className : '',
    onClick   : () => {},
  }

  getRootClasses = () => [
    styles.Root,
    this.props.className,
    this.props.isActive ? styles.isActive : '',
  ].join(' ')

  render() {
    const { onClick } = this.props;

    return (
      <button className={ this.getRootClasses() } onClick={ onClick } type="button">
        <div className={ styles.Bar } />
        <div className={ styles.Bar } />
        <div className={ styles.Bar } />
      </button>
    );
  }
}
