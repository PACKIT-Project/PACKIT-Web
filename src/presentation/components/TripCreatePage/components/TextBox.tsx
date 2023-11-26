import React from 'react';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import { TYPOGRAPHY } from '@styles/fonts';

const TextBox = ({ children }: { children: React.ReactNode }) => {
  return <TextBoxWrapper>{children}</TextBoxWrapper>;
};

const TextBoxWrapper = styled.div`
  color: ${COLOR.COOL_GRAY_300};
  ${TYPOGRAPHY.TITLE.DISPLAY1_BOLD};
`;
export default TextBox;
