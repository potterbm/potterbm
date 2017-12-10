import Footer                   from './Footer';
import Header                   from './Header';
import Hero                     from './Hero';
import Portfolio                from './Portfolio';
import Profile                  from './Profile';
import projects                 from './projects';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class App extends PureComponent {
  render() {
    return (
      <div className={ styles.Root }>
        <Header />

        <Hero />
        <Profile />
        <Portfolio projects={ projects } />

        <Footer />
      </div>
    );
  }
}
