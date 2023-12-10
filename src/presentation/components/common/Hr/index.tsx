import React from 'react';
import styled from 'styled-components';

const Hr = ({ height, color }: { height: number; color: string }) => {
  return <HrContainer height={height} color={color} />;
};

export default Hr;

const HrContainer = styled.div<{ height: number; color: string }>`
  position: absolute;
  height: ${({ height }) => height}px;
  width: 100%;
  background-color: ${({ color }) => color};
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1024px) {
    width: 390px;
  }
`;
