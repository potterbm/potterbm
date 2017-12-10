import React, { PureComponent } from 'react';
import styles                   from './styles';

export default class Logo extends PureComponent {
  state = {
    isLogoShown : false,
  }

  componentDidMount() {
    this.loadingTimeout = window.setTimeout(() => {
      this.setState({ isLogoShown : true });
      this.loadingTimeout = null;
    }, 10);
  }

  componentWillUnmount() {
    if (this.loadingTimeout !== null) window.clearTimeout(this.loadingTimeout);
  }

  getLogoClasses = () => [
    styles.Logo,
    !this.state.isLogoShown ? styles.isHiddenisHidden : '',
  ].join('')

  render() {
    return (
      <svg
        className={ this.getLogoClasses() }
        viewBox="0 0 200 200"
      >
        <line x1="55" y1="0" x2="55" y2="150" />
        <circle cx="100" cy="100" r="45" />
        <line x1="145" y1="50" x2="145" y2="200" />
      </svg>
    );
  }
}
