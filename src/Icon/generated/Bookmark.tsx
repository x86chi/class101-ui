import * as React from 'react';
import { IconProps } from '../index';
export default class SvgBookmark extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 5H7.009l-.007 12.966L12 15.824l5 2.143V5zm0-2c1.1 0 2 .9 2 2v16l-7-3-7 3 .01-16c0-1.1.89-2 1.99-2h10z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
