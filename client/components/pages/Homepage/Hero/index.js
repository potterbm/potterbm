import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Hero extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Software with a purpose</h1>
      </div>
    );
  }
}
