import React from 'react';
import './styles.scss';

const Sidebar = () => (
  <nav className="Sidebar--Root">
    <a className="Sidebar--Link" href="https://github.com/potterbm">
      Github
    </a>

    <a className="Sidebar--Link" href="mailto:potterbm@gmail.com">
      Email
    </a>

    <a className="Sidebar--Link" href="https://linkedin.com/in/potterbm">
      LinkedIn
    </a>
  </nav>
);

export default Sidebar;
