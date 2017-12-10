import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Profile extends PureComponent {
  render() {
    return (
      <section className={ styles.Profile }>
        <div className={ styles.Image } />

        <div className={ styles.Info }>
          <h2 className={ styles.Title }>A little about me</h2>

          <p className={ styles.Text }>
            I started making websites for fun 5 years ago, and I’m still excited to be doing it
            full-time. I enjoy the challenge of creating complex and responsive layouts, and
            cleanly-written, maintainable code makes me smile.
          </p>

          <p className={ styles.Text }>
            I can use almost any language or framework, but right now my favorites are React and
            React Native.
          </p>

          <p className={ styles.Text }>
            I live and work in Denver, and I love this city. When I’m not making awesome websites
            you can find me outside climbing rocks or riding a longboard.
          </p>
        </div>

      </section>
    );
  }
}
