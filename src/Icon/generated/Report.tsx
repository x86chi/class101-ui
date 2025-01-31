import * as React from 'react';
import { IconProps } from '../index';
export default class SvgReport extends React.PureComponent<IconProps> {
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
          d="M7 16h8v2H6v2h12v-2h-1v-4a5 5 0 00-10 0v2zm12 0h1v6H4v-6h1v-2a7 7 0 1114 0v2zM12 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zm9.192 3.808a1 1 0 010 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414a1 1 0 011.414 0zm-18.384 0a1 1 0 011.414 0l1.414 1.414a1 1 0 01-1.414 1.414L2.808 6.222a1 1 0 010-1.414z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
