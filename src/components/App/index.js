import './styles.css';
import Footer                   from './Footer';
import Header                   from './Header';
import Hero                     from './Hero';
import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />

        <Hero />

        <Footer />
      </div>
    );
  }
}
