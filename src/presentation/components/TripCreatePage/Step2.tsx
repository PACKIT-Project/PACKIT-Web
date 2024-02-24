import React, { useState } from 'react';
import { styled } from 'styled-components';
import TextBox from './components/TextBox';
import Spacing from '../common/Spacing';
import BottomButton from '../common/BottomButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCreateTripState } from '../../../application/reducer/slices/createTrip/createTripSlice';
import COLOR from '@styles/colors';
import { TYPOGRAPHY } from '@styles/fonts';
import { useSelector } from 'react-redux';
import { RootState } from '@store';
import { motion } from 'framer-motion';

const Step2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { destination } = useSelector((state: RootState) => state.createTrip);

  const [place, setPlace] = useState('');
  const handleClickNextBtn = () => {
    dispatch(changeCreateTripState({ type: 'tripName', value: place }));
    navigate('/trip-create/3');
  };

  return (
    <StepWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TextContainer>
        <TextBox>
          <div>
            여행의 제목을
            <br />
            입력해주세요
          </div>
        </TextBox>
      </TextContainer>
      <Spacing size={6} />
      <div className="subText">제목은 14자까지 입력 가능합니다</div>
      <Spacing size={30} />
      <InputWrapper>
        <div className="destination">{destination}</div>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="여행의 제목을 입력해주세요"
          maxLength={14}
        />
      </InputWrapper>
      <BottomButton
        disabled={place === ''}
        text="다음"
        onClick={handleClickNextBtn}
      />
    </StepWrapper>
  );
};

const StepWrapper = styled(motion.div)`
  .subText {
    ${TYPOGRAPHY.DES.CAPTION1_SEMIBOLD};
    color: ${COLOR.COOL_GRAY_100};
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;

  border-radius: 6px;
  border: 1px solid ${COLOR.COOL_GRAY_200};
  padding: 8px;

  .destination {
    width: fit-content;
    padding: 10px;
    border-radius: 6px;
    background-color: #d1f1ff;
    color: ${COLOR.MAIN_BLUE};
    ${TYPOGRAPHY.TEXT.BODY3_SEMIBOLD};
    white-space: nowrap;
  }
  input {
    width: 100%;
    border: none;
    outline: none;

    ${TYPOGRAPHY.TEXT.BODY1_MEDIUM};
    color: ${COLOR.COOL_GRAY_400};

    ::placeholder {
      color: ${COLOR.UI_GRAY_3};
    }
  }
`;

export default Step2;
