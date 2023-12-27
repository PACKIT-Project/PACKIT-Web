import React from 'react';
import styled from 'styled-components';
import COLOR from '@styles/colors';

interface ToggleButtonPropsType {
  state: boolean;
  onClick: () => void;
}

const ToggleButton = ({ state, onClick }: ToggleButtonPropsType) => {
  return (
    <ToggleButtonWrapper state={state} onClick={onClick}>
      <div className="circle" />
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;

const ToggleButtonWrapper = styled.div<{ state: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 54px;
  height: 32px;
  background-color: ${({ state }) => (state ? COLOR.MAIN_BLUE : COLOR.UI_GRAY_3)};
  border-radius: 24px;
  cursor: pointer;

  .circle {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    background-color: ${COLOR.MAIN_WHITE};
    margin: 3px;
    box-sizing: border-box;
    right: ${({ state }) => (state ? 0 : 'initial')};
    transition: 0.5s;
  }
`;
