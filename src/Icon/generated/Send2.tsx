import * as React from 'react';
import { IconProps } from '../index';
export default class SvgSend2 extends React.PureComponent<IconProps> {
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
          d="M6 11h4a1 1 0 110 2H6v6l13-7L6 5v6zm.948 9.76C5.616 21.479 4 20.514 4 19V5c0-1.513 1.616-2.478 2.948-1.761l13 7c1.403.755 1.403 2.767 0 3.522l-13 7z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
