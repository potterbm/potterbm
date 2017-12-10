import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Footer extends PureComponent {
  render() {
    return (
      <header className={ styles.Root }>
        <div className={ styles.Container }>
          <nav className={ styles.Column }>
            <h2 className={ styles.Title }>Side Projects</h2>
            <ul>
              <li><a href="http://potterbm.github.io/device-models/">device models</a></li>
              <li><a href="/typography">fun with typography</a></li>
              <li><a href="http://codepen.io/potterbm/">codepen</a></li>

            </ul>
          </nav>

          <nav className={ styles.Column }>
            <h2 className={ styles.Title }>What you should hire me for</h2>
            <p>
              I do front-end or full stack web development on a wide variety
              of languages and frameworks.
            </p>

            <p>
              Want to know more? Email me at
              {' '}<a href="mailto:potterbm@gmail.com">potterbm@gmail.com</a>
            </p>
          </nav>

        </div>
      </header>
    );
  }
}
