import Project                  from './Project';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Portfolio extends PureComponent {
  static propTypes = {
    projects : PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    return (
      <section className={ styles.Root }>
        { this.props.projects.map(project => (
          <div key={ project.slug } className={ styles.ProjectContainer }>
            <Project project={ project } />
          </div>
        )) }
      </section>
    );
  }
}
