import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeCreateTripState } from '@reducer/slices/createTrip/createTripSlice';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import { useNavigate } from 'react-router-dom';

interface DestinationType {
  id: number;
  country: string;
  city: string;
}
const DestinationList = ({ destinations }: { destinations: DestinationType[] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickDestination = (destination: DestinationType) => {
    let recent = JSON.parse(localStorage.getItem('recent') as string) || [];
    recent.push(destination.city);
    recent = Array.from(new Set(recent));
    localStorage.setItem('recent', JSON.stringify(recent));

    dispatch(
      changeCreateTripState({ type: 'destinationId', value: destination.id })
    );
    dispatch(
      changeCreateTripState({ type: 'destination', value: destination.city })
    );
    navigate('/trip-create/2');
  };

  return (
    <DestinationListWrapper>
      {destinations.map((destination) => (
        <Destination
          key={destination.id}
          onClick={() => handleClickDestination(destination)}
        >
          <div className="city">{destination.city}</div>
          <div className="country">{destination.country}</div>
        </Destination>
      ))}
    </DestinationListWrapper>
  );
};

export default DestinationList;

const DestinationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  border: 1px solid ${COLOR.COOL_GRAY_100};
  background-color: ${COLOR.MAIN_WHITE};
  border-radius: 8px;
  padding: 9px 0;
  margin-top: 4px;
`;

const Destination = styled.div`
  padding: 4px 13px;
  .city {
    ${TYPOGRAPHY.TITLE.SUBHEADING4_MEDIUM};
    color: ${COLOR.MAIN_BLUE};
  }
  .country {
    ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
    color: ${COLOR.COOL_GRAY_300};
  }
  border-bottom: 1px solid ${COLOR.COOL_GRAY_100};
  &:last-child {
    border-bottom: none;
  }
`;
