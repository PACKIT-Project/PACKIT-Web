import React from 'react';
import COLOR from '@styles/colors';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Text from '../Text';
import { TYPOGRAPHY } from '@styles/fonts';

const PageIndicator = () => {
  const { step } = useParams();
  return (
    <PageIndicatorWrapper>
      <div style={{ color: COLOR.MAIN_BLUE }}>{String(step)}</div>
      <div style={{ color: COLOR.GRAY_600 }}>/3</div>
    </PageIndicatorWrapper>
  );
};

const PageIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;

  ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
`;

export default PageIndicator;
