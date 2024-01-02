import React from 'react';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';

type TextButtonType = {
  text?: string;
  onClick?: any;
};
const TextButton = ({ text, onClick }: TextButtonType) => {
  return <TextButtonWrapper onClick={onClick}>{text}</TextButtonWrapper>;
};

const TextButtonWrapper = styled.div`
  color: ${COLOR.COOL_GRAY_100};
  font-size: 16px;
  font-weight: 600;
  line-height: 20.5px;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  cursor: pointer;
`;

export default TextButton;
