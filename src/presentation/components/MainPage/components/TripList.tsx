import React, { useState } from 'react';
import Spacing from '@components/common/Spacing';
import COLOR from '@styles/colors';
import { styled } from 'styled-components';
import TripCard from './TripCard';
import useGetMyTravel from '../../../../application/hooks/queries/travel/useGetMyTravel';
import { TYPOGRAPHY } from '@styles/fonts';

const TripList = () => {
  const tripState = ['예정된 여행', '지난 여행'];
  const [currentState, setCurrentState] = useState('예정된 여행');
  const { data: travels } = useGetMyTravel(currentState);

  return (
    <>
      {travels && (
        <TripListWrapper>
          <TopWrapper>
            {tripState.map((state) => (
              <StateText
                key={state}
                onClick={() => setCurrentState(state)}
                selected={currentState === state}
              >
                {state}
              </StateText>
            ))}
          </TopWrapper>
          <Spacing size={19} />
          <TripListContainer>
            {travels &&
              travels.map((travel: any) => (
                <TripCard key={travel.id} travel={travel} />
              ))}
          </TripListContainer>
        </TripListWrapper>
      )}
    </>
  );
};

const TripListWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
`;

const StateText = styled.div<{ selected: boolean }>`
  ${TYPOGRAPHY.TITLE.SUBHEADING2_BOLD};
  cursor: pointer;
  color: ${({ selected }) => (selected ? COLOR.COOL_GRAY_400 : COLOR.UI_GRAY_3)};
  border-bottom: ${({ selected }) =>
    selected ? `2px solid ${COLOR.COOL_GRAY_400}` : 'none'};
`;
const TripListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export default TripList;
