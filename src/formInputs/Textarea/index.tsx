import React, { HTMLAttributes, PureComponent } from 'react';
import styled from 'styled-components';

import { generateIntentClassName, IntentValue } from '../../core/common';
import { body2 } from '../../core/TextStyles';
import { FormInputBaseStyle } from '../common';

export interface TextareaProps {
  /** 옆으로 쌓이게 할 것인지 여부 */
  inline?: boolean;

  intent?: IntentValue;

  /** input의 className */
  inputRef?: React.RefObject<HTMLTextAreaElement>;
  className?: string;
  inputAttributes?: React.HTMLAttributes<HTMLTextAreaElement>;
}

export class Textarea extends PureComponent<TextareaProps> {
  public render() {
    const { className, intent, inputRef, inputAttributes, ...restProps } = this.props;

    return (
      <StyledTextarea
        className={generateIntentClassName(className, intent)}
        {...inputAttributes}
        {...restProps}
        {...inputRef && {
          ref: inputRef,
        }}
        {...restProps}
      />
    );
  }
}

const StyledTextarea = styled.textarea<TextareaProps>`
  ${FormInputBaseStyle}
  ${body2};
  width: 100%;
  height: 108px;
  padding: 12px 16px;
  box-sizing: border-box;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;
