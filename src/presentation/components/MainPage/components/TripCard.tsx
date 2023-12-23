import React from 'react';
import { styled } from 'styled-components';
import COLOR from '@styles/colors';
import { useNavigate } from 'react-router-dom';
import { TYPOGRAPHY } from '@styles/fonts';
import Icon from '@components/common/Icon';

const TripCard = ({ travel }: any) => {
  const navigate = useNavigate();

  const handleClickTravelDetail = () => {
    navigate(`/trip/${travel.id}`);
  };

  return (
    <TripCardWrapper onClick={handleClickTravelDetail}>
      <div className="travelInfo">
        <div className="travelName">{travel.title}</div>
        <div className="travelDetail">
          <Icon icon="LocationPin" />
          {travel.destination} · {travel.startDate} -{' '}
          {travel.endDate.split('.').slice(1, 3).join('.')}{' '}
          <span className="dDay">&nbsp;&nbsp;{travel.dDay}일 남음</span>
        </div>
      </div>
    </TripCardWrapper>
  );
};

const TripCardWrapper = styled.div`
  padding: 16px 0;
  cursor: pointer;

  .travelInfo {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .travelName {
      ${TYPOGRAPHY.TEXT.BODY2_BOLD};
      color: ${COLOR.COOL_GRAY_400};
    }
    .travelDetail {
      display: flex;
      flex-direction: row;
      align-items: center;

      ${TYPOGRAPHY.DES.CAPTION3_SEMIBOLD};
      color: ${COLOR.UI_GRAY_5};

      .dDay {
        color: ${COLOR.MAIN_BLUE};
      }
    }
  }
`;

export default TripCard;
