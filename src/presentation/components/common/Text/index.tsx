import React from 'react';
import { styled } from 'styled-components';

type TextType = {
  text: string;
  color: string;
  fontSize: number;
  lineHeight: string;
  fontWeight: number;
  letterSpacing?: string;
  cursor?: boolean;
  onClick?: () => void;
};
const Text = ({
  text,
  color,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  cursor,
  onClick,
}: TextType) => {
  return (
    <TextWrapper
      style={{
        color,
        fontSize,
        lineHeight,
        fontWeight,
        letterSpacing,
      }}
      cursor={String(cursor)}
      onClick={onClick}
    >
      {text}
    </TextWrapper>
  );
};

const TextWrapper = styled.div<{ cursor?: string }>`
  cursor: ${({ cursor }) => (cursor === 'true' ? 'pointer' : 'initial')};
`;
export default Text;
