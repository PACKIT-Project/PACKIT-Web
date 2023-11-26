import React from 'react';
import { RootState } from '@store';
import COLOR from '@styles/colors';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { getMonthandDate } from '../../../../application/utils/getDate';
import { TYPOGRAPHY } from '@styles/fonts';

const CalendarRange = () => {
  const { tripRange } = useSelector((state: RootState) => state.createTrip);

  return (
    <CalendarRangeWrapper>
      <div className="range-box">
        <span>부터</span>
        <div className="range-text">{getMonthandDate(tripRange?.start) || ''}</div>
      </div>
      <div className="range-slash">
        <span></span>
        <div>/</div>
      </div>
      <div className="range-box">
        <span>까지</span>
        <div className="range-text">{getMonthandDate(tripRange?.end)}</div>
      </div>
    </CalendarRangeWrapper>
  );
};
const CalendarRangeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;

  .range-box {
    display: flex;
    flex-direction: column;
    gap: 6px;

    width: 115px;

    color: ${COLOR.GRAY_500};
    ${TYPOGRAPHY.DES.CAPTION2_MEDIUM};

    text-align: center;
    .range-text {
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${COLOR.GRAY_900};
      ${TYPOGRAPHY.TITLE.SUBHEADING1_SEMIBOLD};
    }
  }
  .range-slash {
    display: flex;
    align-items: center;

    font-size: 17px;
    color: ${COLOR.GRAY_500};
  }
`;
export default CalendarRange;
