import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Logo extends PureComponent {
  static propTypes = {
    className : PropTypes.string,
  }

  static defaultProps = {
    className : null,
  }

  render() {
    return (
      <svg className={ styles.Root } viewBox="0 0 200 200">
        <line className={ styles.LineB } x1="55" x2="55" y1="0" y2="150" />
        <circle cx="100" cy="100" r="45" />
        <line className={ styles.LineP } x1="145" x2="145" y1="50" y2="200" />
      </svg>
    );
  }
}
