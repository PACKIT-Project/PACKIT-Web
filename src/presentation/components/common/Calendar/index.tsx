import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import Calendar from 'react-calendar';
import './Calendar.css';
import { changeTripRange } from '../../../../application/reducer/slices/createTrip/createTripSlice';
import Spacing from '../Spacing';
import { toLocalISOString } from '../../../../application/utils/getDate';

type CustomCalendarProps = {
  defaultStartDay?: number[];
  defaultEndDay?: number[];
  onChangeStartDay?: any;
  onChangeEndDay?: any;
};

const CustomCalendar = ({
  defaultStartDay,
  defaultEndDay,
  onChangeStartDay,
  onChangeEndDay,
}: CustomCalendarProps) => {
  const dispatch = useDispatch();
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const formatDay = (locale: string | undefined, date: Date) => {
    return date.getDate().toString();
  };

  const updateDateRange = (date: Date) => {
    if (dateRange[0] === dateRange[1] && date >= dateRange[0]) {
      setDateRange([dateRange[0], date]);
      onChangeEndDay && onChangeEndDay(date);
      dispatch(
        changeTripRange({
          type: 'end',
          value: toLocalISOString(date),
        })
      );
    } else {
      setDateRange([date, date]);
      onChangeStartDay && onChangeStartDay(date);
      onChangeEndDay && onChangeEndDay(date);
      dispatch(
        changeTripRange({
          type: 'start',
          value: toLocalISOString(date),
        })
      );
      dispatch(
        changeTripRange({
          type: 'end',
          value: '',
        })
      );
    }
  };

  const titleClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      if (date.getDay() === 0) {
        return 'sunday';
      } else if (date.getDay() === 6) {
        return 'saturday';
      }
    }
  };

  return (
    <CalendarWrapper isEditMode={defaultStartDay && defaultEndDay ? true : false}>
      {defaultStartDay && defaultEndDay ? (
        <Calendar
          calendarType="hebrew"
          locale="ko-KR"
          selectRange={true}
          formatDay={formatDay}
          onClickDay={updateDateRange}
          tileClassName={titleClassName}
          next2Label={null}
          prev2Label={null}
          defaultValue={[
            new Date(defaultStartDay[0], defaultStartDay[1], defaultStartDay[2]),
            new Date(defaultEndDay[0], defaultEndDay[1], defaultEndDay[2]),
          ]}
        />
      ) : (
        <Calendar
          calendarType="hebrew"
          locale="ko-KR"
          selectRange={true}
          formatDay={formatDay}
          onClickDay={updateDateRange}
          tileClassName={titleClassName}
          next2Label={null}
          prev2Label={null}
        />
      )}
      <Spacing size={16} />
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div<{ isEditMode: boolean }>`
  border-bottom: ${({ isEditMode }) => (isEditMode ? '' : '1px solid #dbdbdb')};
`;

export default CustomCalendar;
