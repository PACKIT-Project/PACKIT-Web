import React from 'react';
import { css, styled } from 'styled-components';
import Icon from '../Icon';
import COLOR from '@styles/colors';

type InputType = {
  placeholder: string;
  onChange: any;
  type?: string;
  value: string;
  padding?: string;
  textCount?: boolean;
  maxLength?: number;
  error?: string;
  success?: string;
  textCountInside?: boolean;
};

const Input = ({
  placeholder,
  onChange,
  type,
  value,
  padding,
  textCount,
  maxLength,
  error,
  success,
  textCountInside,
}: InputType) => {
  return (
    <InputWrapper>
      <InputContainer>
        <CustomInput
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          padding={padding}
          maxLength={maxLength}
          $error={error}
          $success={success}
        />
        {textCountInside && maxLength && (
          <div className="checked-icon">
            <TextCount>{`${value.length}/${maxLength}`}</TextCount>
          </div>
        )}
        {success === 'true' && (
          <div className="checked-icon">
            <Icon icon="InputChecked" />
          </div>
        )}
        {error === 'true' && (
          <div className="checked-icon">
            <Icon icon="InputError" />
          </div>
        )}
      </InputContainer>

      {textCount && maxLength && (
        <TextCount>{`${value.length}/${maxLength}`}</TextCount>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputContainer = styled.div`
  position: relative;

  .checked-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

const CustomInput = styled.input<{
  padding?: string;
  $error?: string;
  $success?: string;
}>`
  width: 100%;
  height: 50px;
  padding: 16px 15px;

  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  background-color: ${COLOR.UI_GRAY_1};

  color: ${COLOR.COOL_GRAY_500};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;

  &::placeholder {
    color: ${COLOR.UI_GRAY_4};
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.5px;
  }

  &:focus {
    outline: 1.5px solid ${COLOR.COOL_GRAY_300};
  }

  ${({ $error }) =>
    $error === 'true' &&
    css`
      border: 1.5px solid ${COLOR.ALERT_WARNING};
      &:focus {
        outline: none;
      }
    `}

  ${({ $success }) =>
    $success === 'true' &&
    css`
      border: 1.5px solid ${COLOR.MAIN_BLUE};
      &:focus {
        outline: none;
      }
    `}
`;

const TextCount = styled.div`
  color: ${COLOR.GRAY_500};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;
export default Input;
