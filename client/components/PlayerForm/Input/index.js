import camelCaseToTitleCase     from 'lib/camelCaseToTitleCase';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Input extends PureComponent {
  static propTypes = {
    error    : PropTypes.string,
    name     : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    value    : PropTypes.string,
  }

  static defaultProps = {
    error : '',
    value : '',
  }

  getInputClasses() {
    const { error } = this.props;

    return [
      styles.Input,
      error !== '' ? styles.hasError : '',
    ].join(' ').trim();
  }

  render() {
    const {
      error,
      name,
      onChange,
      value,
    } = this.props;

    return (
      <div className={ styles.Root }>
        <label className={ styles.Label } htmlFor={ name }>
          { camelCaseToTitleCase(name) }
        </label>

        <div className={ styles.InputWrapper }>
          <input
            className={ this.getInputClasses() }
            id={ name }
            name={ name }
            onChange={ onChange }
            value={ value }
          />
        </div>

        <div className={ styles.Error }>{ error }</div>
      </div>
    );
  }
}
