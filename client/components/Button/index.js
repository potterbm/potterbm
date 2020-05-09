import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Button extends PureComponent {
  static propTypes = {
    children  : PropTypes.any,
    className : PropTypes.string,
    isLoading : PropTypes.bool,
    onClick   : PropTypes.func,
    type      : PropTypes.string,
  }

  static defaultProps = {
    className : null,
    isLoading : false,
    onClick   : () => null,
    type      : 'button',
  }

  getRootClasses() {
    const { className, isLoading } = this.props;

    return [
      styles.Root,
      className !== null ? className : '',
      isLoading ? styles.isLoading : '',
    ].join(' ').trim();
  }

  render() {
    const {
      children,
      onClick,
      type,
    } = this.props;

    return (
      <button
        className={ this.getRootClasses() }
        onClick={ onClick }
        type={ type }
      >
        { children }

        {/* These are used for the loading state */}
        <span className={ styles.Loader } />
        <span className={ styles.Loader } />
        <span className={ styles.Loader } />
        <span className={ styles.Loader } />
      </button>
    );
  }
}
