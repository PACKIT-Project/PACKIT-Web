import React from 'react';
import COLOR from '@styles/colors';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Text from '../Text';

const PageIndicator = () => {
  const { step } = useParams();
  return (
    <PageIndicatorWrapper>
      <Text
        text={String(step)}
        fontSize={16}
        fontWeight={400}
        lineHeight="125%"
        color={COLOR.MAIN_BLUE}
      />
      <Text
        text="/3 Step"
        fontSize={16}
        fontWeight={400}
        lineHeight="125%"
        color={COLOR.GRAY_600}
      />
    </PageIndicatorWrapper>
  );
};

const PageIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export default PageIndicator;
