import React from 'react';
import Icon from '@components/common/Icon';
import { StepWrapper, Text } from './style';

const Step1 = () => {
  return (
    <StepWrapper>
      <Text>
        빈틈없는
        <Icon icon="Time" />
      </Text>
      <Text>
        <Icon icon="Vacation" />
        여행의 시작
      </Text>
      <Text className="color">EASY</Text>
      <Text className="color">
        TRIP PREP
        <Icon icon="Plane" width={50} height={50} />
      </Text>
    </StepWrapper>
  );
};

export default Step1;
