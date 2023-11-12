import React from 'react';
import { styled } from 'styled-components';
import Spacing from '../common/Spacing';
import TextBox from './components/TextBox';
import BottomButton from '../common/BottomButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store';
import CustomCalendar from '@components/common/Calendar';
import CalendarRange from '@components/common/CalendarRange';

const Step2 = () => {
  const navigate = useNavigate();
  const { tripRange } = useSelector((state: RootState) => state.createTrip);

  const handleClickNextBtn = () => {
    navigate('/trip-create/3');
  };

  return (
    <StepWrapper>
      <TextBox>
        언제 여행을
        <br />
        떠나시나요?
      </TextBox>
      <Spacing size={26} />
      <CalendarWrapper>
        <CustomCalendar />
        <Spacing size={23} />
        <CalendarRange />
      </CalendarWrapper>
      <BottomButton
        disabled={tripRange?.start === '' || tripRange?.end === ''}
        text="다음"
        onClick={handleClickNextBtn}
      />
    </StepWrapper>
  );
};

const StepWrapper = styled.div``;

const CalendarWrapper = styled.div`
  padding: 16px;
`;
export default Step2;
