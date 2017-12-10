import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Hero extends PureComponent {
  render() {
    return (
      <section className={ styles.Hero }>
        <h1 className={ styles.Title }>Bryan Potter</h1>
        <h2 className={ styles.SubTitle }><strong>Front-end developer</strong></h2>
      </section>
    );
  }
}
