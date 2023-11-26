import React from 'react';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import TextButton from '../TextButton';
import { TYPOGRAPHY } from '@styles/fonts';

type BottomButtonType = {
  text: string;
  disabled?: boolean;
  onClick?: any;

  textButton?: boolean;
  textButtonChild?: string;
  textButtonOnClick?: any;
};

const BottomButton = ({
  text,
  disabled,
  onClick,

  textButton,
  textButtonChild,
  textButtonOnClick,
}: BottomButtonType) => {
  return (
    <BottomButtonWrapper>
      {textButton && (
        <TextButton onClick={textButtonOnClick} text={textButtonChild} />
      )}
      <Button onClick={onClick} disabled={disabled}>
        {text}
      </Button>
    </BottomButtonWrapper>
  );
};

const BottomButtonWrapper = styled.div`
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    width: 390px;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) =>
    disabled ? COLOR.MAIN_INACTIVE : COLOR.MAIN_BLUE};
  outline: none;

  color: ${COLOR.MAIN_WHITE};
  ${TYPOGRAPHY.BUTTON.LABEL1_BOLD};
`;
export default BottomButton;
