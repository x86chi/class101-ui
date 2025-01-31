import * as React from 'react';
import { IconProps } from '../index';
export default class SvgBell extends React.PureComponent<IconProps> {
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
          d="M10.5 4.161V3.5a1.5 1.5 0 013 0v.661A7.003 7.003 0 0119 11v5.5l1 .5v2H4v-2l1-.5V11a7.003 7.003 0 015.5-6.839zM10 20h4a2 2 0 11-4 0z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
