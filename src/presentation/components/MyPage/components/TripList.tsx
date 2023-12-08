import React from 'react';
import styled from 'styled-components';
import Icon from '@components/common/Icon';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import { getTripDate } from '@utils/getDate';

const TripList = ({ travel }: { travel: any }) => {
  const { dates } = getTripDate({ start: travel.startDate, end: travel.endDate });
  return (
    <TripWrapper>
      <TopWrapper>
        <div className="info">
          <div className="dDay">{travel.dDay}</div>
          <div className="person">
            <Icon icon="User" width={14} height={14} color={COLOR.UI_GRAY_5} />
            2/8
          </div>
        </div>
        <Icon icon="ETC" cursor={true} />
      </TopWrapper>
      <div className="travelName">{travel.title}</div>
      <div className="travelInfo">
        <Icon icon="LocationPin" />
        {travel.title}·{dates}
      </div>
    </TripWrapper>
  );
};

export default TripList;

const TripWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px 12px 22px;

  .travelName {
    ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
    color: ${COLOR.COOL_GRAY_400};
  }

  .travelInfo {
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
    color: ${COLOR.UI_GRAY_5};
  }
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .info {
    display: flex;
    flex-direction: row;
    gap: 5px;

    .dDay {
      display: flex;
      align-items: center;
      ${TYPOGRAPHY.TEXT.BODY4_SEMIBOLD};
      color: ${COLOR.MAIN_BLUE};
    }

    .person {
      display: flex;
      flex-direction: row;
      gap: 3px;
      align-items: center;

      padding: 2px 8px;
      border-radius: 6px;
      background: ${COLOR.UI_GRAY_1};

      color: ${COLOR.UI_GRAY_5};
      font-size: 11px;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: -0.11px;
    }
  }
`;
