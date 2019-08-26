import React from 'react';
import { Icon } from '../../src';

export interface IconProps {
  size?: number;
  fillColor?: string;
  accentColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Component = ({ ...props }: IconProps) => <Icon {...props} />;
