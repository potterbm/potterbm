import { Formik }               from 'formik';
import { Link }                 from 'react-router-dom';
import * as appPropTypes        from 'constants/propTypes';
import Button                   from 'components/Button';
import Input                    from './Input';
import PropTypes                from 'prop-types';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class PlayerForm extends PureComponent {
  static propTypes = {
    isSaving : PropTypes.bool.isRequired,
    onSubmit : PropTypes.func.isRequired,
    player   : appPropTypes.player,
  }

  static defaultProps = {
    player : null,
  }

  initialFormState = {
    email     : '',
    firstName : '',
    lastName  : '',
    photo     : '',
    winnings  : '',
  }

  fieldsInOrder = [
    'firstName',
    'lastName',
    'email',
    'photo',
    'winnings',
  ]

  getInitialValues() {
    const { player } = this.props;

    if (player === null) return this.initialFormState;

    return {
      email     : player.get('email'),
      firstName : player.get('firstName'),
      lastName  : player.get('lastName'),
      photo     : player.get('photo'),
      winnings  : `${player.get('winnings')}`,
    };
  }

  validateForm = (values) => {
    const errors = {};

    // Email is required
    if (values.email === '') values.error = 'Email is required';

    // Winnings has to be a number
    if (values.winnings === '') errors.winnings = 'Winnings is required';
    if (!/[0-9]+(\.[0-9]+)?/.test(values.winnings)) errors.winnings = 'Winnings has to be a number';

    return errors;
  }

  renderForm = ({
    errors,
    handleChange,
    handleSubmit,
    values,
  }) => {
    const { isSaving } = this.props;

    return (
      <form className={ styles.Root } onSubmit={ handleSubmit }>
        <For each="field" of={ this.fieldsInOrder }>
          <Input
            key={ `input-${field}` }
            error={ errors[field] }
            name={ field }
            onChange={ handleChange }
            value={ values[field] }
          />
        </For>

        <div className={ styles.Buttons }>
          <Button className={ styles.Submit } isLoading={ isSaving } type="submit">Save</Button>
          <Link className={ styles.Cancel } to="/players" type="cancel">Cancel</Link>
        </div>
      </form>
    );
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <Formik
        enableReinitialize
        initialValues={ this.getInitialValues() }
        onSubmit={ onSubmit }
        render={ this.renderForm }
        validate={ this.validateForm }
        validateOnBlur={ false }
        validateOnChange={ false }
      />
    );
  }
}
