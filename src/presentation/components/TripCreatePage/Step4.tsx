import React from 'react';
import BottomButton from '@components/common/BottomButton';
import { RootState } from '@store';
import { getTripDate } from '@utils/getDate';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createTravel } from '@api/travel';

const Step4 = () => {
  const navigate = useNavigate();
  const { destination, tripRange, tripName, destinationId } = useSelector(
    (state: RootState) => state.createTrip
  );

  const { range, dates } = getTripDate(tripRange, '-');

  const handleCreateTravel = async () => {
    const res = await createTravel({
      title: tripName,
      destinationId,
      startDate: tripRange.start,
      endDate: tripRange.end,
    });
    if (res.message === '새로운 여행 생성에 성공했습니다.') {
      navigate('/trip-create/complate');
    }
  };

  return (
    <StepWrapper>
      <strong>{destination}</strong> 로 <br />
      <strong>{range}</strong> 까지 <br />
      <strong>{dates}</strong> 여행을 떠나시나요?
      <BottomButton text="여행 생성 완료하기" onClick={handleCreateTravel} />
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
