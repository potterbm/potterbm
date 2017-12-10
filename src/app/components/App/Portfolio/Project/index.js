import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Project extends PureComponent {
  static propTypes = {
    project : PropTypes.shape({
      description : PropTypes.string,
      longText    : PropTypes.string,
      slug        : PropTypes.string,
      tags        : PropTypes.arrayOf(PropTypes.string),
      title       : PropTypes.string,
      url         : PropTypes.string,
    }),
  }

  render() {
    const {
      description,
      tags,
      title,
      url,
    } = this.props.project;

    return (
      <div className={ styles.Root }>
        <h3 className={ styles.Title }>{ title }</h3>
        <div className={ styles.Image } style={{ backgroundImage: `url(${url})` }} />
        <p className={ styles.Description }>{ description }</p>

        <ul className={ styles.Tags }>
          { tags.map(tag => (
            <li key={ tag } className={ styles.Tag }>{ tag }</li>
          )) }
        </ul>
      </div>
    );
  }
}
