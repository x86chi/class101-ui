import { HTMLInputProps } from 'interfaces/props';
import React from 'react';
import styled from 'styled-components';

import { gray800, orange500, redError } from '../../Colors';
import { body2 } from '../../TextStyles';
import { FormInputFillStyle, FormInputStyle, FormInputStyleBySize, InputSize } from '../common';
import InlineError, { Intent } from '../InlineError';

export interface InputProps {
  inputRef?: React.RefObject<HTMLInputElement>;
  label?: string;
  size: InputSize;
  type: string;
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  fill?: boolean;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

const StyledInput = styled.input<InputProps>`
  ${body2};
  ${FormInputStyle};
  ${props => FormInputStyleBySize[props.size]};
  ${props => (props.fill ? FormInputFillStyle : null)};
  color: ${gray800};
  box-sizing: border-box;
  padding: 0 16px;
  border-radius: 3px;
  &.error {
    border: solid 1px ${redError};
  }

  &.warn {
    border: solid 1px ${orange500};
  }
`;

const Container = styled.div<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const InlineLabel = styled.label`
  ${body2}
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export default class Input extends React.PureComponent<HTMLInputProps & InputProps> {
  public static defaultProps: Partial<InputProps> = {
    size: InputSize.md,
    fill: true,
    type: 'text',
  };

  public render() {
    const {
      type,
      className,
      style,
      inputStyle,
      inline,
      allowMessage,
      warnMessage,
      errorMessage,
      label,
      size,
      id,
      inputRef,
      ...restProps
    } = this.props;
    const labelId = id && label && `input-${label}`;
    return (
      <Container style={style} inline={inline}>
        {label && <InlineLabel htmlFor={labelId}>{label}</InlineLabel>}
        <StyledInput
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}`}
          type={type}
          id={labelId}
          size={size}
          style={inputStyle}
          {...inputRef && {
            ref: inputRef,
          }}
          {...restProps}
        />
        {allowMessage && !errorMessage && (
          <InlineError icon={null} intent={Intent.DEFAULT}>
            {allowMessage}
          </InlineError>
        )}
        {errorMessage && <InlineError intent={Intent.DANGER}>{errorMessage}</InlineError>}
        {warnMessage && <InlineError intent={Intent.WARNING}>{warnMessage}</InlineError>}
      </Container>
    );
  }
}
