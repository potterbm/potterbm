import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles.scss';

export default () => (
  <nav className={styles.Root}>
    <Link className={styles.Link} to="/">
      Home
    </Link>

    {/* <Link className={styles.Link} to="/">
      Articles
    </Link> */}

    <a className={styles.Link} href="https://github.com/potterbm">
      Github
    </a>

    <a className={styles.Link} href="mailto:potterbm@gmail.com">
      Email
    </a>
  </nav>
);
