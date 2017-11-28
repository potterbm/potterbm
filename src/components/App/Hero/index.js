import './styles.css';
import React, { PureComponent } from 'react';

export default class Hero extends PureComponent {
  render() {
    return (
      <section className="Hero">
      	<h1 className="Hero-Title">Bryan Potter</h1>
      	<h2 className="Hero-SubTitle"><strong>Front-end developer</strong></h2>
      </section>
    );
  }
}
