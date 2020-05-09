import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Title extends PureComponent {
  static propTypes = {
    children : PropTypes.any,
    title    : PropTypes.string.isRequired,
  }

  render() {
    const { children, title } = this.props;

    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>{ title }</h1>

        { children || null }
      </div>
    );
  }
}
