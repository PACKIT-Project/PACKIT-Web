import React from 'react';
import { styled } from 'styled-components';
import Icon from '../Icon';
import COLOR from '@styles/colors';

type ModalHeaderType = {
  text?: string;
  color?: string;
  closeModal: () => void;
};

const ModalHeader = ({ text, color, closeModal }: ModalHeaderType) => {
  return (
    <ModalHeaderWrapper color={color}>
      <Icon icon="Arrow" fill={color} onClick={closeModal} cursor={true} />
      <div className="text">{text}</div>
      <div className="emptySpace"></div>
    </ModalHeaderWrapper>
  );
};

const ModalHeaderWrapper = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;

  color: ${({ color }) => (color ? color : COLOR.GRAY_900)};
  font-size: 18px;
  font-weight: 700;
  line-height: 140%;

  cursor: pointer;
  .text {
    flex-grow: 1;
    text-align: center;
  }
  .emptySpace {
    width: 24px;
    height: 25px;
    visibility: hidden;
  }
`;
export default ModalHeader;
