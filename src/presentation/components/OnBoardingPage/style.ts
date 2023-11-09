import COLOR from '@styles/colors';
import styled from 'styled-components';

export const StepWrapper = styled.div`
  font-size: 46.833px;
  font-style: normal;
  font-weight: 800;
  line-height: 132%;
  color: ${COLOR.BLACK};

  .color {
    font-weight: 800;
    color: ${COLOR.MAIN_BLUE} !important;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
`;
