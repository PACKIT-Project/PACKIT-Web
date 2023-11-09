import React from 'react';
import Icon from '@components/common/Icon';
import { StepWrapper, Text } from './style';

const Step2 = () => {
  return (
    <StepWrapper>
      <Text>
        동행자와
        <Icon icon="HandShake" />
      </Text>
      <Text>
        <Icon icon="Memo" />
        함께 만드는
      </Text>
      <Text className="color">GROUP</Text>
      <Text className="color">
        CHECLLIST
        <Icon icon="Sign" />
      </Text>
    </StepWrapper>
  );
};

export default Step2;
