import React from 'react';
import Icon from '@components/common/Icon';
import { StepWrapper, Text } from './style';

const Step3 = () => {
  return (
    <StepWrapper>
      <Text>
        실시간
        <Icon icon="OnBoardingSearch" />
      </Text>
      <Text>
        <Icon icon="Idea" />
        여행지 정보
      </Text>
      <Text className="color">LIVE</Text>
      <Text className="color">
        INSIGHT
        <Icon icon="Notice" />
      </Text>
    </StepWrapper>
  );
};

export default Step3;
