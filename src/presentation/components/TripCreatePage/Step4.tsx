import React from 'react';
import BottomButton from '@components/common/BottomButton';
import { RootState } from '@store';
import { getTripDate } from '@utils/getDate';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Step4 = () => {
  const navigate = useNavigate();
  const { tripName, tripRange, memberNum } = useSelector(
    (state: RootState) => state.createTrip
  );
  const { range, dates } = getTripDate(tripRange);

  return (
    <StepWrapper>
      <strong>{tripName}</strong> 로 <br />
      <strong>{range}</strong> 까지 <br />
      <strong>{dates}</strong> 여행을 <br />
      <strong>{memberNum}명</strong> 의 인원으로 떠나시나요?
      <BottomButton
        text="여행 생성 완료하기"
        onClick={() => navigate('/trip-create/complate')}
      />
    </StepWrapper>
  );
};

export default Step4;

const StepWrapper = styled.div`
  color: #232527;
  font-size: 30px;
  font-weight: 600;
  line-height: 159.5%;
  strong {
    color: #02b2ff;
    font-weight: 700;
    text-decoration-line: underline;
  }
`;
