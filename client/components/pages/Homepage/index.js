import Hero                     from './Hero';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Homepage extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <div className={ styles.Root }>
        <Hero />
      </div>
    );
  }
}
