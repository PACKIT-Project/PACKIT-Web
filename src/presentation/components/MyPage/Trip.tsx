import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '@components/common/Icon';
import Text from '@components/common/Text';
import useGetMyTravel from '@hooks/queries/travel/useGetMyTravel';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';

const Trip = () => {
  const tripState = ['예정된 여행', '지난 여행'];
  const [currentState, setCurrentState] = useState('예정된 여행');
  const { data } = useGetMyTravel(currentState);

  return (
    <TripWrapper>
      <TopWrapper>
        {tripState.map((state) => (
          <Text
            key={state}
            text={state}
            color={currentState === state ? COLOR.COOL_GRAY_200 : COLOR.UI_GRAY_3}
            fontSize={14}
            fontWeight={600}
            lineHeight="14px"
            cursor={true}
            onClick={() => setCurrentState(state)}
          />
        ))}
      </TopWrapper>
      {currentState === '예정된 여행' && data.length === 0 ? (
        <div className="content">
          <Icon icon="GraphicTravel" />
          새로운 여행 준비를 시작해보세요.
        </div>
      ) : null}
    </TripWrapper>
  );
};

export default Trip;

const TripWrapper = styled.div`
  position: relative;
  height: 100%;
  .content {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    gap: 20px;

    ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
    color: ${COLOR.UI_GRAY_4};

    white-space: nowrap;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-end;

  padding: 18px 16px;
`;
